import { generateBoard } from '../components/game-functions';
import { defaultState } from './helpers';

export function stepReducer(state = defaultState(), action) {
    if (action.type === "CHANGE_STEP" && action.stepNumber < state.history.length) {
        return Object.assign({}, state, { stepNumber: action.stepNumber });
    }

    return state;
}