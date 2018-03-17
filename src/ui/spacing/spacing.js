import React from 'react';
import PropTypes from 'prop-types';
import insertIf from 'Helpers/insert-if';

import './spacing.css';

const SPACING_PROPS = Object.freeze(['xs', 's', 'm', 'l', 'xl']);

const Spacing = ({ children, right, bottom }) => {
    const classes = [
        ...insertIf(right, `right-${right}`),
        ...insertIf(bottom, `bottom-${bottom}`)
    ];

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    );
};

Spacing.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    right: PropTypes.oneOf(SPACING_PROPS),
    bottom: PropTypes.oneOf(SPACING_PROPS)
};

Spacing.defaultProps = {
    right: undefined,
    bottom: undefined
};

export default Spacing;
