import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import { copyArray, findWinner, findGlobalWinner } from './utils';
import nextMove from './ai';

function startState() {
  const board = [];
  for (let i = 0; i < 9; i++)
    board.push(new Array(9).fill(-1));
  return { board, turn: 0, current: -1 };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = startState();
    this.restart = this.restart.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  restart() {
    this.setState(startState());
  }

  handleClick(i, j) {
    if (findGlobalWinner(this.state.board) !== -1)
      return; // game has ended
    if (this.state.board[i][j] !== -1)
      return; // cell already occupied
    if (this.state.current !== -1) {
      const local = this.state.board[this.state.current];
      const localWinner = findWinner(local);
      const freeSquares = local.indexOf(-1) !== -1;
      if (localWinner === -1 && freeSquares && i !== this.state.current)
        return; // must move in designated sub-board if possible
      else if (localWinner !== -1 && i === this.state.current)
        return; // cannot move in won board
    }
    const board2 = copyArray(this.state.board);
    board2[i][j] = this.state.turn;
    this.setState({
      board: board2,
      turn: 1 - this.state.turn,
      current: j
    });
    const winner = findGlobalWinner(board2);
    if (winner !== -1) {
      setTimeout(() => {
        alert(`${winner ? 'O' : 'X'} has won!`);
      }, 1000);
    }
  }

  bestMove() {
    return nextMove(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Super Tic-Tac-Toe</h1>
        <div className="grid">
          <Board board={this.state.board} onClick={this.handleClick} />
        </div>
        <div className="controls">
          <button onClick={this.restart}>Restart</button>{' '}
          <button onClick={() => this.handleClick(...this.bestMove())}>AI</button>
          {/* <button>Undo</button> */}
        </div>
      </div>
    );
  }
}

export default App;
