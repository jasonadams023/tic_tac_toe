import React from 'react';

import Board from './board.js';
import { calculateWinner, calculateBoardFull, generateBoard, nextPlayer } from './game-functions.js';

export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
        history: [ {squares: generateBoard(3)} ],
        stepNumber: 0
    };
  }

  handleClick(x, y) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    let squares = [];

    for (let x = 0; x < current.squares.length; x++) {
        squares.push(current.squares[x].slice());
    }

    if (calculateWinner(squares) || squares[x][y]) {
        return;
    }

    squares[x][y] = nextPlayer(this.state.stepNumber);

    this.setState({
        history: history.concat([{ squares: squares }]),
        stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
        stepNumber: step,
    });
  }

  status(squares) {
      const winner = calculateWinner(squares);

      if (winner) {
          return 'Winner is: ' + winner;
      } else if (calculateBoardFull(squares)) {
          return "Cat's Game";
      }else {
          return 'Next player: ' + nextPlayer(this.state.stepNumber);
      }
  }

  getMoves(history) {
    return history.map((step, move) => {
           const description = move ? 'Move #' + move : 'Game Start';

           return (
               <li key={ move }>
                   <a href='#' className="moves" onClick={ () => this.jumpTo(move) }> { description } </a>
               </li>
           );
       });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = this.getMoves(history);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={ current.squares }
                 onClick={ (x, y) => this.handleClick(x, y) }
          />
        </div>
        <div className="game-info">
          <div id="status">{ this.status(current.squares) }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}