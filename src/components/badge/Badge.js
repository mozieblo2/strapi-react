import './Badge.css';

function Badge(props) {
    return (
        <div className={`Badge ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
}

export default Badge;