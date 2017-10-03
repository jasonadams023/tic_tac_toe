import React from 'react';
import Game from '../../../app/components/game';
import { generateBoard } from '../../../app/components/game-functions';
import { store } from '../../../app/redux/store';

describe('Game', () => {
    it('displays a new game', () => {
        const wrapper = shallow (
            < Game store={ store }/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('displays a cat\'s game', () => {
        let x = 'X';
        let o = 'O';

        let action = { type: "PLAYER_MOVE", x: 0, y: 0 };
        store.dispatch(action);
        action.y = 1;
        store.dispatch(action);
        action.y = 2;
        store.dispatch(action);
        action.y = 1;
        action.x = 1;
        store.dispatch(action);
        action.y = 0;
        store.dispatch(action);
        action.x = 2;
        store.dispatch(action);
        action.y = 2;
        action.x = 1;
        store.dispatch(action);
        action.x = 2;
        action.y = 2;
        store.dispatch(action);
        action.y = 1;
        store.dispatch(action);

        const wrapper = shallow (
            < Game store={ store } />
        );

        expect(wrapper).toMatchSnapshot();
    });
});