import React from 'react';
import PropTypes from 'prop-types';

import GameStatus from './game-status';
import { calculateWinner, calculateBoardFull, nextPlayer } from '../game-functions.js';

export default function TicTacToeStatus (props, { store }) {
    const state = store.getState();
    const stepNumber = state.stepNumber;
    const squares = state.history[stepNumber].squares;

    const winner = calculateWinner(squares);
    const tie = calculateBoardFull(squares);
    const next = nextPlayer(stepNumber);

    return (
        < GameStatus winner={ winner } tie={ tie } nextPlayer={ next } />
    );
}

TicTacToeStatus.contextTypes = {
    store: PropTypes.object
}