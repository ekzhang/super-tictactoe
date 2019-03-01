import React from 'react';
import SubBoard from './SubBoard';

function Board({ board, onClick }) {
  return (
    <table style={{ background: 'black' }}>
      <tbody>
        <tr>
          <td><SubBoard value={board[0]} onClick={j => onClick(0, j)} /></td>
          <td><SubBoard value={board[1]} onClick={j => onClick(1, j)} /></td>
          <td><SubBoard value={board[2]} onClick={j => onClick(2, j)} /></td>
        </tr>
        <tr>
          <td><SubBoard value={board[3]} onClick={j => onClick(3, j)} /></td>
          <td><SubBoard value={board[4]} onClick={j => onClick(4, j)} /></td>
          <td><SubBoard value={board[5]} onClick={j => onClick(5, j)} /></td>
        </tr>
        <tr>
          <td><SubBoard value={board[6]} onClick={j => onClick(6, j)} /></td>
          <td><SubBoard value={board[7]} onClick={j => onClick(7, j)} /></td>
          <td><SubBoard value={board[8]} onClick={j => onClick(8, j)} /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Board;
