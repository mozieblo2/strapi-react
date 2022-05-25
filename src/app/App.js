import { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from '../pages/homepage/Homepage';
import Restaurants from '../components/restaurants/Restaurants';
import Button from '../components/button/Button';
import './App.css';

function App() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1337/api/restaurants?populate=*').then(response => {
            setRestaurants(response.data.data);
        });
    }, []);

    const addRestaurant = () => {
        axios
            .post('http://localhost:1337/api/restaurants', {
                data: {
                    name: 'jakiś tekst',
                    description: 'test',
                    categories: [3]
                }
            })
            .then(response => {
                setRestaurants([...restaurants, response.data.data]);
            });
    };

    // TODO: create from for new items and add validations
    // TODO: install formik + materialUi?

    return (
        <div className="App">
            <header className="App-header">
                <p>Learn React with Strapi</p>
            </header>
            <main>
                <Homepage>
                    <Button onClick={addRestaurant}>Add Restaurant</Button>
                    <Restaurants restaurants={restaurants} />
                </Homepage>
            </main>
        </div>
    );
}

export default App;
