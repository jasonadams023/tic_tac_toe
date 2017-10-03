import { reducer } from '../../../app/redux/reducer';
import { generateBoard } from '../../../app/components/game-functions';

describe('Reducer', () => {
    let beforeState;

    beforeEach(() => {
        beforeState = {
            history: [ {squares: generateBoard(3)} ],
            stepNumber: 0
        };
    });

    it('changes the step number', () => {
        const stepAction = {type: "CHANGE_STEP", stepNumber: 1};
        let moveAction = { type: "PLAYER_MOVE", x: 0, y: 0 };
        let state;

        state = reducer(state, moveAction);
        moveAction.x = 1;
        state = reducer(state, moveAction);
        moveAction.x = 2;

        const expectedState = Object.assign({}, state, { stepNumber: 1 });

        expect(reducer(state, stepAction)).toEqual(expectedState);
    });

    it('updates the game state when a player makes a move', () => {
        const action = {type: "PLAYER_MOVE", x: 0, y: 0};
        let squares = generateBoard(3);
        squares[0][0] = 'X';
        const history = beforeState.history.concat({squares: squares});
        const afterState = {
            history: history,
            stepNumber: 1
        };

        expect(reducer(beforeState, action)).toEqual(afterState);
        expect(beforeState).toEqual({
                                        history: [ {squares: generateBoard(3)} ],
                                        stepNumber: 0
                                    });
    });

    it('does not update the state when the move is invalid', () => {
        let squares = generateBoard(3);
        squares[0][0] = 'X';
        const history = beforeState.history.concat({squares: squares});
        beforeState = {
                          history: history,
                          stepNumber: 1
                      };
        const action = {type: "PLAYER_MOVE", x: 0, y: 0};

        expect(reducer(beforeState, action)).toEqual(beforeState);
    });
});