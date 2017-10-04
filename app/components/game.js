import React from 'react';

import Board from './board.js';
import { calculateWinner, calculateBoardFull, generateBoard, nextPlayer } from './game-functions.js';
import { store } from '../redux/store';

export default class Game extends React.Component {
  constructor() {
    super();
  }

  handleClick(x, y) {
    this.props.store.dispatch({ type: "PLAYER_MOVE", x: x, y: y });
  }

  jumpTo(step) {
    this.props.store.dispatch({ type: "CHANGE_STEP", stepNumber: step });
  }

  status(squares) {
      const winner = calculateWinner(squares);

      if (winner) {
          return 'Winner is: ' + winner;
      } else if (calculateBoardFull(squares)) {
          return "Cat's Game";
      }else {
          return 'Next player: ' + nextPlayer(this.props.store.getState().stepNumber);
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
    const history = this.props.store.getState().history;
    const current = history[this.props.store.getState().stepNumber];
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