import { historyReducer } from '../../../app/redux/historyReducer';
import { generateBoard } from '../../../app/components/game-functions';

describe('historyReducer', () => {
    const defaultBoard = generateBoard(3);
    const defaultState = { history: [{ squares: defaultBoard }], stepNumber: 0 };

    it('initializes history', () => {
        const beforeState = undefined;
        const action = { type: "NOT_AN_ACTION" };

        expect(historyReducer(beforeState, action)).toEqual(defaultState);
    });

    it('updates history', () => {
        const beforeState = defaultState;
        const action = { type: "PLAYER_MOVE", x: 0, y: 0 };
        let squares = generateBoard(3);
        squares[0][0] = 'X';
        const afterState = { history: [{squares: defaultBoard}, {squares: squares}], stepNumber: 1 };

        expect(historyReducer(beforeState, action)).toEqual(afterState);
    });

    it('does not update the state when the space is already occupied', () => {
        let beforeState = defaultState;
        let squares = generateBoard(3);
        squares[0][0] = 'X';
        const history = beforeState.history.concat({squares: squares});
        beforeState = {
                          history: history,
                          stepNumber: 1
                      };
        const action = {type: "PLAYER_MOVE", x: 0, y: 0};

        expect(historyReducer(beforeState, action)).toEqual(beforeState);
    });

    it('does not update the state when the game is won', () => {
        const actions = [];
        actions.push({ type: "PLAYER_MOVE", x: 0, y: 0 });
        actions.push({ type: "PLAYER_MOVE", x: 0, y: 1 });
        actions.push({ type: "PLAYER_MOVE", x: 1, y: 0 });
        actions.push({ type: "PLAYER_MOVE", x: 0, y: 2 });
        actions.push({ type: "PLAYER_MOVE", x: 2, y: 0 });
        actions.push({ type: "PLAYER_MOVE", x: 2, y: 2 });
        let state;
        let afterState;

        for (let i = 0; i < actions.length; i++) {
            state = historyReducer(state, actions[i]);

            if (i === actions.length - 2) {
                afterState = Object.assign({}, state);
            }
        }

        expect(state).toEqual(afterState);
    });
});