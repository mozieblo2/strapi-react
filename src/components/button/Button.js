import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onClick, children }) {
    return (
        <button type="button" className="Button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};
