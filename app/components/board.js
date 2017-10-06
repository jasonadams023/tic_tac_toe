import React from 'react';
import PropTypes from 'prop-types';

import TicTacToeTile from './tic-tac-toe-tile';

export default function Board (props, { store }) {
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
                                const coordinates = {x: xIndex, y: yIndex};
                                return (
                                    < TicTacToeTile
                                        key={ xIndex + '-' + yIndex }
                                        coordinates={ coordinates }
                                    />
                                );
                            })
                        }
                    </div>
                })
            }
        </div>
    );
}

Board.contextTypes = {
    store: PropTypes.object
}