import React from 'react';
import PropTypes from 'prop-types';

import Move from './moves';

export default class Moves extends React.Component {
    render() {
        const { store } = this.context;

        const handleClick = (step) => { store.dispatch({ type: "CHANGE_STEP", stepNumber: step }); };

        const moves = store.getState().history.map((step, move) => {
            const description = move ? 'Move #' + move : 'Game Start';
            return (
                <li key={move} className="moves">
                    <button onClick={() => handleClick(move)}>{ description }</button>
                </li>
           );
        });

        return (
            <ol>{ moves }</ol>
        );
    }
}

Moves.contextTypes = {
    store: PropTypes.object
}