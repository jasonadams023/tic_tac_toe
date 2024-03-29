import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Move from './move';
import { changeStep } from '../../redux/actionCreators';

function Moves ({history, handleClick}) {
    const moves = history.map((step, move) => {
        const description = move ? 'Move #' + move : 'Game Start';
        return (
            < Move key={move} class="moves" description={ description } onClick={ () => handleClick(move) } />
       );
    });

    return (
        <ol>{ moves }</ol>
    );
}

const mapStateToProps = (state) => {
    return { history: state.history };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (step) => { dispatch(changeStep(step)) }
    };
};

Moves = connect(mapStateToProps, mapDispatchToProps)(Moves);

export default Moves;