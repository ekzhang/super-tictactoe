import React from 'react';
import Cell from './Cell';
import { findWinner } from './utils';

function SubBoard({ value, onClick }) {
  const winner = findWinner(value);
  return (
    <table className={winner === -1 ? '' : 'win-' + winner}>
      <tbody>
        <tr>
          <td><Cell value={value.get(0)} onClick={() => onClick(0)} /></td>
          <td><Cell value={value.get(1)} onClick={() => onClick(1)} /></td>
          <td><Cell value={value.get(2)} onClick={() => onClick(2)} /></td>
        </tr>
        <tr>
          <td><Cell value={value.get(3)} onClick={() => onClick(3)} /></td>
          <td><Cell value={value.get(4)} onClick={() => onClick(4)} /></td>
          <td><Cell value={value.get(5)} onClick={() => onClick(5)} /></td>
        </tr>
        <tr>
          <td><Cell value={value.get(6)} onClick={() => onClick(6)} /></td>
          <td><Cell value={value.get(7)} onClick={() => onClick(7)} /></td>
          <td><Cell value={value.get(8)} onClick={() => onClick(8)} /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default SubBoard;
