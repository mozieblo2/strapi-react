import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

function Badge({ className, children }) {
    return <div className={`Badge ${className ? className : ''}`}>{children}</div>;
}

export default Badge;

Badge.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
