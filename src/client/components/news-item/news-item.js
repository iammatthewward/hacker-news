import React from 'react';
import PropTypes from 'prop-types';

import Card from 'Ui/card';
import Heading from 'Ui/heading';
import Content from 'Ui/content';
import Spacing from 'Ui/spacing';

import './news-item.css';

const NewsItem = ({
    heading, hostname, points, author, hours, comments
}) => (
    <Card>
        <Spacing bottom='s'>
            <Heading tag='h3'>
                {heading} <Content tag='span' size={3}>({hostname})</Content>
            </Heading>
        </Spacing>

        <Spacing bottom='s'>
            <Content size={2}>
                {points} points / by {author} / {hours} hours ago
            </Content>
        </Spacing>

        <Spacing bottom='s'>
            <Content size={2}>
                {comments} comments
            </Content>
        </Spacing>
    </Card>
);

NewsItem.propTypes = {
    heading: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
};

export default NewsItem;
