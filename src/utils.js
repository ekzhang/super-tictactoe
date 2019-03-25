import { fromJS } from 'immutable';

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function startState() {
  const board = [];
  for (let i = 0; i < 9; i++)
    board.push(new Array(9).fill(-1));
  return { board: fromJS(board), turn: 0, current: -1 };
}

export function findWinner(board) {
  for (const [a, b, c] of LINES) {
    const val = board.get(a);
    if (val !== -1 && val === board.get(b) && val === board.get(c))
      return val;
  }
  return -1;
}

export function findGlobalWinner(board) {
  return findWinner(board.map(findWinner));
}
