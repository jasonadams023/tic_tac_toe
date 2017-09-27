import React from 'react';
import Game from '../../../app/components/game';
import { generateBoard } from '../../../app/components/game-functions';

describe('Game', () => {
    it('displays a new game', () => {
        const wrapper = shallow (
            < Game />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('displays a cat\'s game', () => {
        let x = 'X';
        let o = 'O';

        let finalSquares = generateBoard(3);
        finalSquares[0][0] = x;
        finalSquares[0][1] = o;
        finalSquares[0][2] = x;
        finalSquares[1][0] = x;
        finalSquares[1][1] = o;
        finalSquares[1][2] = x;
        finalSquares[2][0] = o;
        finalSquares[2][1] = x;
        finalSquares[2][2] = o;

        const wrapper = shallow (
            < Game />
        );

        wrapper.setState( { history: [{ squares: finalSquares }] } );

        expect(wrapper).toMatchSnapshot();
    });
});