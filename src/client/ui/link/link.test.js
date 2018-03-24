import React from 'react';

import Link from './link';

describe('link', () => {
    let props;
    let children;
    let wrapper;

    beforeEach(() => {
        props = {
            href: 'http://test.com/test'
        };
        children = <span>child content</span>;
        wrapper = shallow(<Link {...props}>{children}</Link>);
    });

    it('should render an anchor tag', () => {
        // arrange
        const expected = 1;
        // act
        const actual = wrapper.find('a').length;
        // assert
        expect(actual).toEqual(expected);
    });

    it('should render children', () => {
        // arrange
        const expected = true;
        // act
        const actual = wrapper.contains(children);
        // assert
        expect(actual).toEqual(expected);
    });

    describe('conditional classNames', () => {
        it('should add a class if unstyled prop is true', () => {
            // arrange
            props = { ...props, unstyled: true };
            wrapper = shallow(<Link {...props}>{children}</Link>);
            const expected = 'link link--unstyled';
            // act
            const actual = wrapper.find('a').props().className;
            // assert
            expect(actual).toEqual(expected);
        });

        it('should not add a class if unstyled prop is false', () => {
            // arrange
            props = { ...props, unstyled: false };
            wrapper = shallow(<Link {...props}>{children}</Link>);
            const expected = 'link';
            // act
            const actual = wrapper.find('a').props().className;
            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('newTab prop is true', () => {
        beforeEach(() => {
            props = {
                ...props,
                newTab: true
            };
            wrapper = shallow(<Link {...props}>{children}</Link>);
        });

        it('should add a target="_blank" attribute', () => {
            // arrange
            const expected = '_blank';
            // act
            const actual = wrapper.find('a').props().target;
            // assert
            expect(actual).toEqual(expected);
        });

        it('should add a rel="noopener noreferrer" attribute', () => {
            // arrange
            const expected = 'noopener noreferrer';
            // act
            const actual = wrapper.find('a').props().rel;
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
