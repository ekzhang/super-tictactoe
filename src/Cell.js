import React from 'react';

function Cell({ value, onClick }) {
  const color = (value ? 'red' : 'blue');
  const text = (value === -1 ? '' : value ? 'O' : 'X');
  return (
    <div className="cell" onClick={onClick} style={{ color }}>{text}</div>
  );
}

export default Cell;
