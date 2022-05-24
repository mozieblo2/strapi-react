import './Restaurant.css';
import Badge from '../../badge/Badge';

function Restaurant(props) {
    return (
        <div className="Restaurant">
            <h3>{props?.name}</h3>
            <p>{props?.description}</p>
            {props?.categories?.data.map(el => {
                if (el?.attributes?.name) {
                    return (
                        <Badge key={props.id} className="Restaurant__badge">{el.attributes.name}</Badge>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default Restaurant;