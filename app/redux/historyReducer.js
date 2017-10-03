import { calculateWinner, generateBoard, nextPlayer } from '../components/game-functions.js';
import { defaultState } from './helpers';

export function historyReducer(state = defaultState(), action) {
    if (action.type === "PLAYER_MOVE") {
            const oldHistory = state.history.slice(0, state.stepNumber + 1);
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

    return state;
}