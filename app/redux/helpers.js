import { generateBoard } from '../components/game-functions';

export function defaultState() {
    return {
        history: [{squares: generateBoard(3)}],
        stepNumber: 0
    };
}