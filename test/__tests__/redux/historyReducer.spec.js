import { historyReducer } from '../../../app/redux/historyReducer';
import { generateBoard } from '../../../app/components/game-functions';

describe('historyReducer', () => {
    const defaultBoard = generateBoard(3);
    const defaultHistory = { history: [{ squares: defaultBoard }] };

    it('initializes history', () => {
        const beforeState = undefined;
        const action = { type: "NOT_AN_ACTION" };

        expect(historyReducer(beforeState, action)).toEqual(defaultHistory);
    });

//    it('updates history', () => {
//        const beforeState = defaultHistory;
//        const action = { type: "PLAYER_MOVE", x: 0, y: 0 };
//        let squares = generateBoard(3);
//        squares[0][0] = 'X';
//        const afterState = { history: [{squares: defaultBoard}, {squares: squares}] };
//
//        expect(historyReducer(beforeState, action)).toEqual(afterState);
//    });
});