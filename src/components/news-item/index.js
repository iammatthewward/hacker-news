import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'Ui/heading';
import Content from 'Ui/content';

import './index.css';

const NewsItem = ({
    heading, hostname, points, author, hours, comments
}) => (
    <div className='news-item'>
        <Heading tag='h3'>
            {heading} <Content tag='span' size={3}>({hostname})</Content>
        </Heading>

        <Content size={2}>
            {points} points / by {author} / {hours} hours ago
        </Content>

        <Content size={2}>
            {comments} comments
        </Content>
    </div>
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
