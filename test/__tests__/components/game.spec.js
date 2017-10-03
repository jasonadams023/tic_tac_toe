import React from 'react';
import Game from '../../../app/components/game';
import { generateBoard } from '../../../app/components/game-functions';
import { store } from '../../../app/redux/store';

describe('Game', () => {
    it ('initializes a new game', () => {
//        const board = generateBoard(3);
//        const game = new Game();
//        const wrapper = shallow ( game.render() );
        const wrapper = shallow ( < Game store={ store } /> );

        const moves = wrapper.find('.moves');
        const status = wrapper.find('#status').text();
//        const history = game.state.history;

//        expect(history).toEqual([ { squares: board } ]);
        expect(status).toBe('Next player: X');
        expect(moves.length).toBe(1);
    });

    xit ('can be played to completion', () => {
        let wrapper = mount (
            < Game store={ store } />
        );

//        store.subscribe(mount);

        const squares = wrapper.find('.square');

        squares.at(0).simulate('click');
        expect(squares.at(0).text()).toBe('X');
        expect(wrapper.find('.moves').length).toBe(2);
        expect(wrapper.find('#status').text()).toBe('Next player: O');

        squares.at(4).simulate('click');
        expect(squares.at(4).text()).toBe('O');
        expect(wrapper.find('.moves').length).toBe(3);
        expect(wrapper.find('#status').text()).toBe('Next player: X');

        squares.at(1).simulate('click');
        squares.at(5).simulate('click');
        squares.at(2).simulate('click');

        expect(wrapper.find('.moves').length).toBe(6);
        expect(wrapper.find('#status').text()).toBe('Winner is: X');
    });
});