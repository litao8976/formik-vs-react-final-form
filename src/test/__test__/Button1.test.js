import renderer from 'react-test-renderer'
import React from 'react';
import Button1 from '../Button1';

describe('Button1', () => {
    it('matches snapshot', () => {
        const component = renderer.create((
            <Button1 />
        ))
        expect(component.toJSON()).toMatchSnapshot()
    })
})
    