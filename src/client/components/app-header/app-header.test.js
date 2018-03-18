import React from 'react';
import Header from 'Ui/header';
import Heading from 'Ui/heading';

import { Component as AppHeader } from './index';

describe('AppHeader component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            heading: 'Hacker News'
        };
        wrapper = shallow(<AppHeader {...props} />);
    });

    it('should render a generic Header wrapper', () => {
        // arrange
        const expected = 1;
        // act & assert
        const actual = wrapper.find(Header).length;
        // assert
        expect(actual).toEqual(expected);
    });

    describe('Heading', () => {
        let header;
        let heading;

        beforeEach(() => {
            header = wrapper.find(Header);
            heading = wrapper.find(Heading);
        });

        it('should render as a child of Header', () => {
            // arrange
            const expected = 1;
            // act & assert
            const actual = header.find(Heading).length;
            // assert
            expect(actual).toEqual(expected);
        });

        it('should render with content', () => {
            // arrange
            const expected = props.heading;
            // act & assert
            const actual = heading.props().children;
            // assert
            expect(actual).toEqual(expected);
        });

        it('should have a tag prop of h1', () => {
            // arrange
            const expected = 'h1';
            // act & assert
            const actual = heading.props().tag;
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
