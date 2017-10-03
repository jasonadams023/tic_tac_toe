import { store } from '../../../app/redux/store';
import { defaultState } from '../../../app/redux/helpers';
import { historyReducer } from '../../../app/redux/historyReducer';

describe('Redux store', () => {
    it('initializes and gets state', () => {
        expect(store.getState()).toEqual(defaultState());
    });

    it('processes actions', () => {
        const action = { type: "PLAYER_MOVE", x: 0, y: 0 };
        const expectedState = historyReducer(undefined, action);

        store.dispatch(action);

        expect(store.getState()).not.toEqual(defaultState());
        expect(store.getState()).toEqual(expectedState);
    });
});