import React from 'react';
import Board from '../../../app/components/board';
import { generateBoard } from '../../../app/components/game-functions';

describe('Board', () => {
    let squares;
    let x = 'X';
    let o = 'O';

    beforeEach(() => {
        squares = generateBoard(3);
    })

    it('displays 3x3 set of squares', () => {
        const wrapper = shallow (
            < Board squares={ squares } />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('passes values of squares to squares', () => {
        squares[0][0] = x;
        squares[0][1] = o;
        squares[0][2] = x;
        squares[1][0] = x;
        squares[1][1] = o;
        squares[1][2] = x;
        squares[2][0] = o;
        squares[2][1] = x;
        squares[2][2] = o;

        const wrapper = shallow (
            < Board squares={ squares } />
        );

        expect(wrapper).toMatchSnapshot();
    })
});