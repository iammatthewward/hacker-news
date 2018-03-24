import React from 'react';
import Card from 'Ui/card';
import Heading from 'Ui/heading';
import Content from 'Ui/content';
import Link from 'Ui/link';

import NewsItem from './index';

describe('NewsItem', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            heading: 'Repair cafés waging war on throwaway culture',
            hostname: 'theguardian.com',
            url: 'https://www.theguardian.com/world/2018/mar/15/can-we-fix-it-the-repair-cafes-waging-war-on-throwaway-culture',
            points: 300,
            author: 'wcunning',
            hours: 3,
            comments: 80
        };
        wrapper = shallow(<NewsItem {...props} />);
    });

    it('should render a Card ui component', () => {
        // arrange
        const expected = 1;
        // act
        const actual = wrapper.find(Card).length;
        // assert
        expect(actual).toEqual(expected);
    });

    describe('heading section', () => {
        let heading;
        let headingLink;

        beforeEach(() => {
            heading = wrapper.find(Heading);
            headingLink = heading.find(Link);
        });

        it('should render the given heading prop inside a Link', () => {
            // arrange
            const expected = props.heading;
            // act
            const actual = headingLink.props().children;
            // assert
            expect(actual).toContain(expected);
        });

        it('should render the given hostname prop', () => {
            // arrange
            const expected = props.hostname;
            // act
            const actual = wrapper.find(Content).at(0).props().children;
            // assert
            expect(actual).toContain(expected);
        });

        it('should pass the given url as a href to the heading link', () => {
            // arrange
            const expected = props.url;
            // act
            const actual = headingLink.props().href;
            // assert
            expect(actual).toContain(expected);
        });
    });

    describe('info section', () => {
        let info;

        beforeEach(() => {
            info = wrapper.find(Content).at(1);
        });

        it('should render the given points prop', () => {
            // arrange
            const expected = props.points;
            // act
            const actual = info.props().children;
            // assert
            expect(actual).toContain(expected);
        });

        it('should render the given author prop', () => {
            // arrange
            const expected = props.author;
            // act
            const actual = info.props().children;
            // assert
            expect(actual).toContain(expected);
        });

        it('should render the given hours prop', () => {
            // arrange
            const expected = props.hours;
            // act
            const actual = info.props().children;
            // assert
            expect(actual).toContain(expected);
        });
    });

    describe('comments section', () => {
        let comments;

        beforeEach(() => {
            comments = wrapper.find(Content).at(2);
        });

        it('should render the given comments prop', () => {
            // arrange
            const expected = props.comments;
            // act
            const actual = comments.props().children;
            // assert
            expect(actual).toContain(expected);
        });
    });
});
