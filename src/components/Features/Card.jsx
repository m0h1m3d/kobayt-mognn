import './card.css';

function Card({icon, feature, description}) {
    return (
        <div className="card">
            <img src={icon} alt={feature} />
            <h3>{feature}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card
