/*
State:
    history: [ {squares: boardState} ],
    stepNumber: int
*/

import { calculateWinner, generateBoard, nextPlayer } from '../components/game-functions.js';

export function reducer (state, action) {
    if (typeof state === 'undefined') {
        state = {
            history: [ {squares: generateBoard(3)} ],
            stepNumber: 0
        };
    }

    if (action.type === "PLAYER_MOVE") {
        const oldHistory = state.history.slice();
        const currentMove = oldHistory[oldHistory.length - 1];
        let squares = [];
        const x = action.x;
        const y = action.y;

        for (let i = 0; i < currentMove.squares.length; i++) {
            squares.push(currentMove.squares[i].slice());
        }

        if (calculateWinner(squares) || squares[x][y]) {
            return state;
        }

        squares[x][y] = nextPlayer(state.stepNumber);

        const newHistory = oldHistory.concat([{ squares: squares }]);
        let nextStep = state.stepNumber + 1;

        return Object.assign({}, state, {history: newHistory, stepNumber: nextStep});
    }
    if (action.type === "CHANGE_STEP") {
        return Object.assign({}, state, {stepNumber: action.stepNumber});
    }

    return state;
}