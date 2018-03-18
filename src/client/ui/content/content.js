import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const Content = ({ tag, children, size }) =>
    React.createElement(
        tag,
        { className: `content size-${size}` },
        children
    );

Content.propTypes = {
    tag: PropTypes.string,
    size: PropTypes.oneOf([
        1, 2, 3, 4
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Content.defaultProps = {
    tag: 'p',
    size: 1
};

export default Content;
