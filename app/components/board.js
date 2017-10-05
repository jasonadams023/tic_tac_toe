import React from 'react';
import PropTypes from 'prop-types';

import Square from './square.js';

export default class Board extends React.Component {
  renderSquare(x, y) {
    const { store } = this.context;
    const state = store.getState();
    const history = state.history;
    const current = history[state.stepNumber];
    const squares = current.squares;

    return  (
                <Square
                    key={ x + '-' + y }
                    value={ squares[x][y] }
                    onClick={ () => this.handleClick(x, y) }
                />
            );
  }

  handleClick(x, y) {
    const { store } = this.context;

    store.dispatch({ type: "PLAYER_MOVE", x: x, y: y });
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    const history = state.history;
    const current = history[state.stepNumber];
    const squares = current.squares;

    return (
        <div className="game-board" >
            {
                squares.map((row, xIndex) => {
                    return <div key={ xIndex } className="board-row">
                        {
                            row.map((space, yIndex) => {
                                return this.renderSquare(xIndex, yIndex)
                            })
                        }
                    </div>
                })
            }
        </div>
    );
  }
}

Board.contextTypes = {
    store: PropTypes.object
}