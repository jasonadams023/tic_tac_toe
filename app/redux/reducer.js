/*
State:
    history: [ {squares: boardState} ],
    stepNumber: int
*/

import { calculateWinner, generateBoard, nextPlayer } from '../components/game-functions.js';
import { historyReducer } from './historyReducer';
import { stepReducer } from './stepReducer';
import { defaultState } from './helpers.js';

export function reducer (state = defaultState(), action) {
    const reducers = [];
    reducers.push(historyReducer);
    reducers.push(stepReducer);

    for (let i = 0; i < reducers.length; i++) {
        state = reducers[i](state, action);
    }

    return state;
}