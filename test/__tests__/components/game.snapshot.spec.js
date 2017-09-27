import React from 'react';
import Game from '../../../app/components/game';

describe('Game', () => {
    it('displays a new game', () => {
        const wrapper = shallow (
            < Game />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('displays a cat\'s game', () => {

    });
});