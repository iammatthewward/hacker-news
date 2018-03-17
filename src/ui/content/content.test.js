import React from 'react';
import Content from './index';

describe('Content', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Content>foo</Content>);
    });

    describe('component tag', () => {
        describe('default props', () => {
            it('should default the tag to p', () => {
                // arrange
                const expected = 1;
                // act
                const actual = wrapper.find('p').length;
                // assert
                expect(actual).toEqual(expected);
            });

            it('should default the size to 1', () => {
                // arrange
                const expected = 1;
                // act
                const actual = wrapper.find(Content).props().size;
                // assert
                expect(actual).toEqual(expected);
            });
        });

        describe('when given props', () => {
            const exampleTags = ['span', 'pre', 'li'];
            const exampleSizes = [2, 3, 4];

            it('should render with the given tag', () => {
                exampleTags.forEach(tag => {
                    // arrange
                    const props = { tag };
                    wrapper = shallow(<Content {...props}>foo</Content>);
                    const expected = 1;
                    // act
                    const actual = wrapper.find(tag).length;
                    // assert
                    expect(actual).toEqual(expected);
                });
            });

            it('should add a size class for styling', () => {
                exampleSizes.forEach(size => {
                    // arrange
                    const props = { size };
                    wrapper = mount(<Content {...props}>foo</Content>);
                    const expected = `size-${size}`;
                    // act
                    const actual = wrapper.find('.content').hasClass(expected);
                    // assert
                    expect(actual).toEqual(true);
                });
            });
        });
    });

    describe('children', () => {
        it('should render children', () => {
            // arrange
            const expected = true;
            const childContent = <span>child content</span>;
            wrapper = shallow(<Content>{childContent}</Content>);
            // act & assert
            const actual = wrapper.contains(childContent);
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
