import React from 'react';
import { connect } from 'react-redux';

import Square from './square';

const mapStateToProps = (state, ownProps) => {
    const x = ownProps.coordinates.x;
    const y = ownProps.coordinates.y;
    const history = state.history;
    const current = history[state.stepNumber];
    const squares = current.squares;
    const value = squares[x][y];

    return {
        value: value
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch({ type: "PLAYER_MOVE", x: ownProps.coordinates.x, y: ownProps.coordinates.y })
    };
};

const TicTacToeTile = connect(mapStateToProps, mapDispatchToProps)(Square);

export default TicTacToeTile;