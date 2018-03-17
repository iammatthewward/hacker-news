import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({ children }) => (
    <header className='header'>{children}</header>
);

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Header.defaultProps = {
    children: []
};

export default Header;
