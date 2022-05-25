import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './restaurant/Restaurant';
import './Restaurants.css';

function Restaurants({ restaurants }) {
    return (
        <div className="Restaurants">
            {restaurants.length > 0 &&
                restaurants?.map(({ attributes: { name, description, categories }, id }) => (
                    <Restaurant key={id} name={name} description={description} categories={categories} id={id} />
                ))}
        </div>
    );
}

export default Restaurants;

Restaurants.propTypes = {
    restaurants: PropTypes.array
};
