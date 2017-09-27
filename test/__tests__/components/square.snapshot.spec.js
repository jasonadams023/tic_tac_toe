import React from 'react';
import Square from '../../../app/components/square.js';

describe('Square', () => {
    it('is empty when value is null', () => {
        const wrapper = mount(
            <Square
                key={ '0' + '-' + '0' }
                value={ null }
                onClick={ () => this.props.onClick('0', '0') }
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('displays X when value is X', () => {
        const wrapper = mount(
            <Square
                key={ '0' + '-' + '0' }
                value={ 'X' }
                onClick={ () => this.props.onClick('0', '0') }
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});