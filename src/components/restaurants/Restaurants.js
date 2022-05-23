import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Restaurant from './restaurant/Restaurant';
import './Restaurants.css';

function Restaurants() {
    const [restaurant, setRestaurant] = useState();
    useEffect(() => {
        axios.get('http://localhost:1337/api/restaurants').then(response => {
            setRestaurant(response.data.data)
        });
    }, []);

    return (
        <div className="Restaurants">
            {restaurant?.map(({ attributes, id }) =>
                <Restaurant name={attributes.name} description={attributes.description} key={id} />
            )}
        </div>
    );
}

export default Restaurants;