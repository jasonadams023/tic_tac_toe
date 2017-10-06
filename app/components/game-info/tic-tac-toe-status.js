import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GameStatus from './game-status';
import { calculateWinner, calculateBoardFull, nextPlayer } from '../game-functions.js';

const mapStateToProps = (state) => {
    const stepNumber = state.stepNumber;
    const squares = state.history[stepNumber].squares;

    return {
        winner: calculateWinner(squares),
        tie: calculateBoardFull(squares),
        nextPlayer: nextPlayer(stepNumber)
    };
};

const TicTacToeStatus = connect( mapStateToProps )( GameStatus );

export default TicTacToeStatus;