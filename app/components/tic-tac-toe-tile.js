import React from 'react';
import PropTypes from 'prop-types';

import Square from './square';

export default class TicTacToeTile extends React.Component {
    render () {
        const { store } = this.context;
        const state = store.getState();
        const x = this.props.coordinates.x;
        const y = this.props.coordinates.y;
        const history = state.history;
        const current = history[state.stepNumber];
        const squares = current.squares;
        const value = squares[x][y];

        const handleClick = (x, y) => { store.dispatch({ type: "PLAYER_MOVE", x: x, y: y }) };

        return  (
            <Square
                value={ value }
                onClick={ () => handleClick(x, y) }
            />
        );
    }
}

TicTacToeTile.contextTypes = {
    store: PropTypes.object
}