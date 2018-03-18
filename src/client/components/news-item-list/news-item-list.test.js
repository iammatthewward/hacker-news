import React from 'react';
import NewsItem from 'Components/news-item';

import NewsItemList from './news-item-list';
import items from './resources/items';

describe('NewsItemList', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            items
        };
        wrapper = shallow(<NewsItemList {...props} />);
    });

    it('should return an ul element', () => {
        // arrange
        const expected = 1;
        // act
        const actual = wrapper.find('ul').length;
        // assert
        expect(actual).toEqual(expected);
    });

    describe('items', () => {
        it('should wrap each item to a li element', () => {
            // arrange
            const expected = items.length;
            // act
            const actual = wrapper.find('li').length;
            // assert
            expect(actual).toEqual(expected);
        });

        it('should map each item to a NewsItem component', () => {
            // arrange
            const expected = items.length;
            // act
            const actual = wrapper.find(NewsItem).length;
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
