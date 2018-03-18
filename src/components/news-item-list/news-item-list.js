import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from 'Components/news-item';
import Spacing from 'Ui/spacing';

import './news-item-list.css';

const NewsItemList = ({ items }) => (
    <ul className='news-item-list'>
        {items.map(item => (
            <li key={item.heading}>
                <Spacing bottom='s'>
                    <NewsItem {...item} />
                </Spacing>
            </li>
        ))}
    </ul>
);

NewsItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(NewsItem.propTypes))
};

NewsItemList.defaultProps = {
    items: []
};

export default NewsItemList;
