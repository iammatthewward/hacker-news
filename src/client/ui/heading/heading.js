import React from 'react';
import PropTypes from 'prop-types';

import './heading.css';

const Heading = ({ tag, children }) =>
    React.createElement(
        tag,
        { className: 'heading' },
        children
    );

Heading.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Heading.defaultProps = {
    tag: 'h1'
};

export default Heading;
