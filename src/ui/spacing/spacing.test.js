import React from 'react';
import Spacing from './index';

describe('Spacing', () => {
    let children;
    let wrapper;

    beforeEach(() => {
        children = <span>child content</span>;
        wrapper = shallow(<Spacing>{children}</Spacing>);
    });

    describe('children', () => {
        it('should render children', () => {
            // arrange
            const expected = true;
            // act & assert
            const actual = wrapper.contains(children);
            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('spacing props', () => {
        const allowedSizes = ['xs', 's', 'm', 'l', 'xl'];

        it('should add a right class for spacing', () => {
            allowedSizes.forEach(size => {
                // arrange
                const props = { right: size };
                wrapper = mount(<Spacing {...props}>foo</Spacing>);
                const expected = `right-${size}`;
                // act
                const actual = wrapper.find('div').hasClass(expected);
                // assert
                expect(actual).toEqual(true);
            });
        });

        it('should add a bottom class for spacing', () => {
            allowedSizes.forEach(size => {
                // arrange
                const props = { bottom: size };
                wrapper = mount(<Spacing {...props}>foo</Spacing>);
                const expected = `bottom-${size}`;
                // act
                const actual = wrapper.find('div').hasClass(expected);
                // assert
                expect(actual).toEqual(true);
            });
        });
    });
});
