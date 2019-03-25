import React, { Component } from 'react';
import { List } from 'immutable';
import './App.css';
import Board from './Board';
import { startState, findWinner, findGlobalWinner } from './utils';
import MonteCarloBot from './ai';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { history: new List([startState()]) };
    this.restart = this.restart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.aiMove = this.aiMove.bind(this);
    this.undo = this.undo.bind(this);
    this.ai = new MonteCarloBot(1000);
  }

  get gameState() {
    return this.state.history.last();
  }

  set gameState(next) {
    this.setState({
      history: this.state.history.push(next)
    });
  }

  restart() {
    this.setState({ history: new List([startState()]) });
    this.ai = new MonteCarloBot(1000);
  }

  undo() {
    if (this.state.history.size > 1)
      this.setState({ history: this.state.history.slice(0, -1) });
  }

  handleClick(i, j) {
    const { gameState } = this;
    if (findGlobalWinner(gameState.board) !== -1)
      return; // game has ended
    if (gameState.board.getIn([i, j]) !== -1)
      return; // cell already occupied
    if (gameState.current !== -1) {
      const local = gameState.board.get(gameState.current);
      const localWinner = findWinner(local);
      const freeSquares = local.indexOf(-1) !== -1;
      if (localWinner === -1 && freeSquares && i !== gameState.current)
        return; // must move in designated sub-board if possible
      else if (localWinner !== -1 && i === gameState.current)
        return; // cannot move in won board
    }
    const board = gameState.board.setIn([i, j], gameState.turn);
    this.gameState = {
      board,
      turn: 1 - gameState.turn,
      current: j
    };
    const winner = findGlobalWinner(board);
    if (winner !== -1) {
      setTimeout(() => {
        alert(`${winner ? 'O' : 'X'} has won!`);
      }, 1000);
    }
  }

  aiMove() {
    const move = this.ai.nextMove(this.gameState);
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
