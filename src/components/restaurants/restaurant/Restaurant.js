import './Restaurant.css';

function Restaurant(props) {
    return (
        <div className="Restaurant">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Restaurant;