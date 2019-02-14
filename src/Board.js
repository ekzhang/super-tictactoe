import React, { Component } from 'react';
import SubBoard from './SubBoard';

class Board extends Component {
  render() {
    return (
      <table style={{ background: 'black' }}>
        <tbody>
          <tr>
            <td><SubBoard value={this.props.board[0]} onClick={j => this.props.onClick(0, j)} /></td>
            <td><SubBoard value={this.props.board[1]} onClick={j => this.props.onClick(1, j)} /></td>
            <td><SubBoard value={this.props.board[2]} onClick={j => this.props.onClick(2, j)} /></td>
          </tr>
          <tr>
            <td><SubBoard value={this.props.board[3]} onClick={j => this.props.onClick(3, j)} /></td>
            <td><SubBoard value={this.props.board[4]} onClick={j => this.props.onClick(4, j)} /></td>
            <td><SubBoard value={this.props.board[5]} onClick={j => this.props.onClick(5, j)} /></td>
          </tr>
          <tr>
            <td><SubBoard value={this.props.board[6]} onClick={j => this.props.onClick(6, j)} /></td>
            <td><SubBoard value={this.props.board[7]} onClick={j => this.props.onClick(7, j)} /></td>
            <td><SubBoard value={this.props.board[8]} onClick={j => this.props.onClick(8, j)} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
