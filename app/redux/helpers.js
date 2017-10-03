import { generateBoard } from '../components/game-functions';

export function stateUndefined(state) {
    return typeof state === 'undefined' ? true : false;
}

export function defaultState() {
    return {
        history: [{squares: generateBoard(3)}],
        stepNumber: 0
    };
}