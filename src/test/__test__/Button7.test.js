import renderer from 'react-test-renderer'
import React from 'react';
import { Button } from '../Button7';

describe('Button', () => {
    it('matches snapshot', () => {
        const component = renderer.create((
            <Button />
        ))
        expect(component.toJSON()).toMatchSnapshot()
    })
})
    