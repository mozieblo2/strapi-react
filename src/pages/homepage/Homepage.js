import './Homepage.css';

function Homepage(props) {
    return (
        <div className="Homepage">
            {props.children}
        </div>
    );
}

export default Homepage;