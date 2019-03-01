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
    this.state = { history: [startState()] };
    this.restart = this.restart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.aiMove = this.aiMove.bind(this);
    this.undo = this.undo.bind(this);
  }

  get gameState() {
    return this.state.history[this.state.history.length - 1];
  }

  set gameState(next) {
    this.setState({
      history: this.state.history.concat([next])
    });
  }

  restart() {
    this.setState({ history: [startState()] });
  }

  undo() {
    this.setState({ history: this.state.history.slice(0, -1) });
  }

  handleClick(i, j) {
    const { gameState } = this;
    if (findGlobalWinner(gameState.board) !== -1)
      return; // game has ended
    if (gameState.board[i][j] !== -1)
      return; // cell already occupied
    if (gameState.current !== -1) {
      const local = gameState.board[gameState.current];
      const localWinner = findWinner(local);
      const freeSquares = local.indexOf(-1) !== -1;
      if (localWinner === -1 && freeSquares && i !== gameState.current)
        return; // must move in designated sub-board if possible
      else if (localWinner !== -1 && i === gameState.current)
        return; // cannot move in won board
    }
    const board2 = copyArray(gameState.board);
    board2[i][j] = gameState.turn;
    this.gameState = {
      board: board2,
      turn: 1 - gameState.turn,
      current: j
    };
    const winner = findGlobalWinner(board2);
    if (winner !== -1) {
      setTimeout(() => {
        alert(`${winner ? 'O' : 'X'} has won!`);
      }, 1000);
    }
  }

  aiMove() {
    const move = nextMove(this.gameState);
    if (move) {
      this.handleClick(...move);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Super Tic-Tac-Toe</h1>
        <div className="grid">
          <Board board={this.gameState.board} onClick={this.handleClick} />
        </div>
        <div className="controls">
          <button onClick={this.restart}>Restart</button>{' '}
          <button onClick={this.aiMove}>AI Move</button>{' '}
          <button onClick={this.undo}>Undo</button>
        </div>
      </div>
    );
  }
}

export default App;
