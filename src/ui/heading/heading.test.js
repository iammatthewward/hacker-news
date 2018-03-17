import React from 'react';
import Heading from './index';

describe('Heading', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {};
        wrapper = mount(<Heading {...props}>foo</Heading>);
    });

    describe('component tag', () => {
        it('should default the tag to h1', () => {
            // arrange
            const expected = 1;
            // act
            const actual = wrapper.find('h1').length;
            // assert
            expect(actual).toEqual(expected);
        });

        describe('when given an allowed tag prop', () => {
            const allowedTagProps = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
            allowedTagProps.forEach(tag => {
                it(`should render with a ${tag} tag`, () => {
                    // arrange
                    props = { ...props, tag };
                    wrapper = mount(<Heading {...props}>foo</Heading>);
                    const expected = 1;
                    // act
                    const actual = wrapper.find(tag).length;
                    // assert
                    expect(actual).toEqual(expected);
                });
            });
        });
    });

    describe('children', () => {
        it('should render children', () => {
            // arrange
            const expected = true;
            const childContent = <span>child content</span>;
            wrapper = mount(<Heading>{childContent}</Heading>);
            // act & assert
            const actual = wrapper.contains(childContent);
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
