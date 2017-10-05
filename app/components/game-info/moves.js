import React from 'react';
import PropTypes from 'prop-types';

import Move from './moves';

export default function Moves() {
    const { store } = this.context;

    const handleClick = (step) => { store.dispatch({ type: "CHANGE_STEP", stepNumber: step }) };

    const moves = store.getState().history.map((step, move) => {
       return (
           < Move key={ move } onClick={ handleClick(move) } />
       );
    });

    return (
        <ol>{ moves }</ol>
    );
}

Moves.propTypes = {
    store: PropTypes.object
}