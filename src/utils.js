export function copyArray(board) {
  const ret = [];
  for (const sub of board)
    ret.push(sub.slice());
  return ret;
}

export function findWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    const val = board[a];
    if (val !== -1 && val === board[b] && val === board[c])
      return board[a];
  }
  return -1;
}

export function findGlobalWinner(board) {
  return findWinner(board.map(findWinner));
}
