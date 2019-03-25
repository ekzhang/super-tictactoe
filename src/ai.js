import { hash } from 'immutable';
import { findWinner, findGlobalWinner } from './utils';

function stateHash(state) {
  return hash(state.board) + '|' + state.turn + '|' + state.current;
}

function moveList(state) {
  const winners = state.board.map(findWinner);
  let current = state.current;
  if (winners.get(current) !== -1)
    current = -1;
  const moves = [];
  for (let i = 0; i < 9; i++) {
    if (current !== -1 && current !== i)
      continue;
    for (let j = 0; j < 9; j++) {
      if (winners.get(i) === -1 && state.board.getIn([i, j]) === -1)
        moves.push([i, j]);
    }
  }
  return moves;
}

function succ(state, move) {
  return {
    board: state.board.setIn(move, state.turn),
    turn: 1 - state.turn,
    current: move[1]
  };
}

function rollout(state) {
  while (true) {
    const winner = findGlobalWinner(state.board);
    if (winner !== -1)
      return winner;
    const moves = moveList(state);
    if (!moves.length)
      return -1;
    state = succ(state, moves[Math.floor(Math.random() * moves.length)]);
  }
}

class MonteCarloBot {
  constructor(iterations) {
    this.N = 0;
    this.sims = new Map();
    this.wins = new Map();
    this.iterations = iterations;
  }

  _uctPolicy(node) {
    const moves = moveList(node);
    let best = -Infinity, ret = null;
    for (const m of moves) {
      const ch = succ(node, m);
      const h = stateHash(ch);
      const n = this.sims.get(h);
      if (!n)
        return null;
      const w = this.wins.get(h);
      const score = w / n + 10 * Math.sqrt(Math.log(this.N) / n);
      if (score > best) {
        ret = ch;
        best = score;
      }
    }
    return ret;
  }

  _pickUnvisited(node) {
    const unvis = [];
    const moves = moveList(node);
    for (const m of moves) {
      const ch = succ(node, m);
      if (!this.sims.get(stateHash(ch))) {
        unvis.push(ch);
      }
    }
    if (!unvis.length)
      return node;
    return unvis[Math.floor(Math.random() * unvis.length)];
  }

  nextMove(state) {
    for (let it = 0; it < this.iterations; it++) {
      ++this.N;
      const history = [state];
      let leaf = state;
      while (true) {
        const nxt = this._uctPolicy(leaf);
        if (!nxt)
          break;
        leaf = nxt;
        history.push(leaf);
      }
      leaf = this._pickUnvisited(leaf);
      history.push(leaf);

      const result = rollout(leaf);
      for (const node of history) {
        const h = stateHash(node);
        this.sims.set(h, (this.sims.get(h) || 0) + 1);
        this.wins.set(h, (this.wins.get(h) || 0) + (result === -1 ? 0.5 : result === node.turn ? 0 : 1));
      }
    }

    const moves = moveList(state);
    let ret = null, max = -1;
    for (const m of moves) {
      const num = this.sims.get(stateHash(succ(state, m)));
      if (num > max)
        [ret, max] = [m, num];
    }
    return ret;
  }
}

export default MonteCarloBot;
