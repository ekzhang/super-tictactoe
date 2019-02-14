import { copyArray, findWinner, findGlobalWinner } from './utils';

function hash(state) {
  const mod = 67108859;
  let h = 0;
  for (const ar of state.board) {
    for (const num of ar)
      h = (h * 11 + num) % mod;
  }
  h = (h * 11 + state.turn) % mod;
  h = (h * 11 + state.current) % mod;
  return h;
}

function moveList(state) {
  const winners = state.board.map(findWinner);
  let current = state.current;
  if (winners[current] !== -1)
    current = -1;
  const moves = [];
  for (let i = 0; i < 9; i++) {
    if (current !== -1 && current !== i)
      continue;
    for (let j = 0; j < 9; j++) {
      if (winners[i] === -1 && state.board[i][j] === -1)
        moves.push([i, j]);
    }
  }
  return moves;
}

function succ(state, move) {
  state.board[move[0]][move[1]] = state.turn;
  state.turn = 1 - state.turn;
  state.current = move[1];
}

function succImmutable(state, move) {
  state = { ...state, board: copyArray(state.board) };
  succ(state, move);
  return state;
}

function rollout(state) {
  state = { ...state, board: copyArray(state.board) };
  while (true) {
    const winner = findGlobalWinner(state.board);
    if (winner !== -1)
      return winner;
    const moves = moveList(state);
    if (!moves.length)
      return -1;
    succ(state, moves[Math.floor(Math.random() * moves.length)]);
  }
}

function nextMove(state) {
  let N = 0;
  const n = {}, w = {}; // number of simulations & wins for state

  function uctPolicy(node) {
    const moves = moveList(node);
    let best = -Infinity, ret = null;
    for (const m of moves) {
      const ch = succImmutable(node, m);
      const h = hash(ch);
      if (!n[h])
        return null;
      const score = w[h] / n[h] + Math.SQRT2 * Math.sqrt(Math.log(N) / n[h]);
      if (score > best) {
        ret = ch;
        best = score;
      }
    }
    return ret;
  }

  function pickUnvisited(node) {
    const unvis = [];
    const moves = moveList(node);
    for (const m of moves) {
      const ch = succImmutable(node, m);
      if (!n[hash(ch)]) {
        unvis.push(ch);
      }
    }
    if (!unvis.length)
      return node;
    return unvis[Math.floor(Math.random() * unvis.length)];
  }

  const ITERS = 4200;
  for (let it = 0; it < ITERS; it++) {
    ++N;
    const history = [state];
    let leaf = state;
    while (true) {
      const nxt = uctPolicy(leaf);
      if (!nxt)
        break;
      leaf = nxt;
      history.push(leaf);
    }
    leaf = pickUnvisited(leaf);
    history.push(leaf);

    const result = rollout(leaf);
    for (const node of history) {
      const h = hash(node);
      n[h] = (n[h] || 0) + 1;
      w[h] = (w[h] || 0) + (result === -1 ? 0.5 : result === node.turn ? 0 : 1);
    }
  }

  const moves = moveList(state);
  let ret = null, best = -1;
  for (const m of moves) {
    const num = n[hash(succImmutable(state, m))];
    if (num > best) {
      best = num;
      ret = m;
    }
  }
  return ret;
}

// function nextMove(state) {
//   const ITERS = 500;
//   const moves = moveList(state);
//   let next = null, best = -Infinity;
//   for (const m of moves) {
//     let fitness = 0;
//     for (let it = 0; it < ITERS; it++) {
//       const s = {
//         ...state,
//         board: copyArray(state.board)
//       };
//       succ(s, m);
//       const winner = markov(s);
//       if (winner !== -1) {
//         if (winner === state.turn)
//           ++fitness;
//         else
//           --fitness;
//       }
//     }
//     fitness /= ITERS;
//     if (fitness > best) {
//       next = m;
//       best = fitness;
//     }
//   }
//   return next;
// }

export default nextMove;
