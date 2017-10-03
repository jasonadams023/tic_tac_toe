import { stepReducer } from '../../../app/redux/stepReducer';
import { historyReducer } from '../../../app/redux/historyReducer';
import { defaultState } from '../../../app/redux/helpers';

describe('stepReducer', () => {
    it('should initialize state', () => {
        expect(stepReducer(undefined, { type: "NOT_AN_ACTION" })).toEqual(defaultState());
    });

    it('should change the stepNumber', () => {
        const stepAction = { type: "CHANGE_STEP", stepNumber: 1 };
        let moveAction = { type: "PLAYER_MOVE", x: 0, y: 0};
        let state;

        state = historyReducer(state, moveAction);
        moveAction.x = 1;
        state = historyReducer(state, moveAction);
        moveAction.x = 2;

        const expectedState = Object.assign({}, state, { stepNumber: 1 });

        expect(stepReducer(state, stepAction)).toEqual(expectedState);
    });

    it('should not change the stepNumber to an invalid step', () => {
        const action = { type: "CHANGE_STEP", stepNumber: 5};

        expect(stepReducer(undefined, action)).toEqual(defaultState());
    });
});