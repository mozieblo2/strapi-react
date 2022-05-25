import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../badge/Badge';
import './Restaurant.css';

function Restaurant({ name, description, categories, id }) {
    return (
        <div className="Restaurant">
            <h3>{name}</h3>
            <p>{description}</p>
            {categories?.data.map(el => {
                if (el?.attributes?.name) {
                    return (
                        <Badge key={id} className="Restaurant__badge">
                            {el.attributes.name}
                        </Badge>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default Restaurant;

Restaurant.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.object,
    id: PropTypes.number
};
