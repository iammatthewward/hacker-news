import React from 'react';
import Card from './index';

describe('Card', () => {
    let wrapper;
    let children;

    beforeEach(() => {
        children = <span>child content</span>;
        wrapper = shallow(<Card>{children}</Card>);
    });

    it('should render children', () => {
        // arrange
        const expected = true;
        // act & assert
        const actual = wrapper.contains(children);
        // assert
        expect(actual).toEqual(expected);
    });
});
