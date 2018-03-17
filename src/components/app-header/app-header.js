import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Ui/header';
import Heading from 'Ui/heading';

const AppHeader = ({ heading }) => (
    <Header>
        <Heading tag='h1'>{heading}</Heading>
    </Header>
);

AppHeader.propTypes = {
    heading: PropTypes.string.isRequired
};

export default AppHeader;
