import React from 'react';
import PropTypes from 'prop-types';
import './Homepage.css';

function Homepage({ children }) {
    return <div className="Homepage">{children}</div>;
}

export default Homepage;

Homepage.propTypes = {
    children: PropTypes.node
};
