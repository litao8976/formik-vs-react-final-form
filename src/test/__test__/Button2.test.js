import renderer from 'react-test-renderer'
import React from 'react';
import { Button } from '../Button2';

describe('Button', () => {
    it('matches snapshot', () => {
        const component = renderer.create((
            <Button />
            //test
        ))
        expect(component.toJSON()).toMatchSnapshot()
    })
})
    