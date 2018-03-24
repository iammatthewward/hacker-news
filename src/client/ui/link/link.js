import React from 'react';
import PropTypes from 'prop-types';

import './link.css';

const Link = ({
    href, children, unstyled, newTab
}) => (
    React.createElement(
        'a',
        {
            className: unstyled ? 'link link--unstyled' : 'link',
            href,
            ...newTab && { target: '_blank' },
            ...newTab && { rel: 'noopener noreferrer' }
        },
        children
    )
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    unstyled: PropTypes.bool,
    newTab: PropTypes.bool
};

Link.defaultProps = {
    unstyled: false,
    newTab: false
};

export default Link;
