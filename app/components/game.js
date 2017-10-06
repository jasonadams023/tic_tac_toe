import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Board from './board.js';
import GameInfo from './game-info/game-info';

export default function Game () {
    return (
        <Provider store={ store } >
            <div className="game">
                < Board />
                < GameInfo />
            </div>
        </Provider>
    );
}