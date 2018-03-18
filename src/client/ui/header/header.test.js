import React from 'react';
import Header from './index';

describe('Header', () => {
    let wrapper;
    let children;

    beforeEach(() => {
        children = <span>child content</span>;
        wrapper = shallow(<Header>{children}</Header>);
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
