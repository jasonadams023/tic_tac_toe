import React from 'react';
import Board from '../../../app/components/board';
import { generateBoard } from '../../../app/components/game-functions';
import { Provider } from 'react-redux';
import { store } from '../../../app/redux/store';


describe('Board', () => {
    let squares;
    let x = 'X';
    let o = 'O';

    beforeEach(() => {
        squares = generateBoard(3);
    })

    it('displays 3x3 set of squares', () => {
        const wrapper = render (
            < Provider store={ store } >
                < Board squares={ squares } />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('passes values of squares to squares', () => {
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

        const wrapper = render (
            < Provider store={ store } >
                < Board />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    })
});