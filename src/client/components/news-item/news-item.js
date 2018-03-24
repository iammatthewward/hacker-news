import React from 'react';
import PropTypes from 'prop-types';

import Card from 'Ui/card';
import Heading from 'Ui/heading';
import Content from 'Ui/content';
import Spacing from 'Ui/spacing';
import Link from 'Ui/link';

import './news-item.css';

const NewsItem = ({
    heading, hostname, points, author, hours, comments, url
}) => (
    <Card>
        <Spacing bottom='s'>
            <Spacing bottom='xs'>
                <Heading tag='h3'>
                    {
                        url
                            ? <Link href={url} newTab unstyled>{heading}</Link>
                            : heading
                    }
                </Heading>
            </Spacing>
            <Content tag='p' size={3}>({hostname})</Content>
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
    hostname: PropTypes.string,
    url: PropTypes.string,
    points: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
};

NewsItem.defaultProps = {
    hostname: undefined,
    url: undefined
};

export default NewsItem;
