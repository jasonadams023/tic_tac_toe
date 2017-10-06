import React from 'react';
import PropTypes from 'prop-types';

import Move from './move';

export default function Moves (props, { store }) {
    const handleClick = (step) => { store.dispatch({ type: "CHANGE_STEP", stepNumber: step }); };

    const moves = store.getState().history.map((step, move) => {
        const description = move ? 'Move #' + move : 'Game Start';
        return (
            < Move key={move} class="moves" description={ description } onClick={ () => handleClick(move) } />
       );
    });

    return (
        <ol>{ moves }</ol>
    );
}

Moves.contextTypes = {
    store: PropTypes.object
}