import { generateBoard } from '../components/game-functions';
import { stateUndefined } from './helpers';

export function historyReducer(state, action) {
    if (stateUndefined(state)) {
        state = { history: [{squares: generateBoard(3)}] };
    }

//    if (action.type === "PLAYER_MOVE") {
//            const oldHistory = state.slice();
//            const currentMove = oldHistory[oldHistory.length - 1];
//            let squares = [];
//            const x = action.x;
//            const y = action.y;
//
//            for (let i = 0; i < currentMove.squares.length; i++) {
//                squares.push(currentMove.squares[i].slice());
//            }
//
//            if (calculateWinner(squares) || squares[x][y]) {
//                return state;
//            }
//
//            squares[x][y] = nextPlayer(state.stepNumber);
//
//            const newHistory = oldHistory.concat([{ squares: squares }]);
////            let nextStep = state.stepNumber + 1;
//
//            return Object.assign({}, state, {history: newHistory, stepNumber: nextStep});
//        }

    return state;
}