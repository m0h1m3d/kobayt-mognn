import Button from "../Button/Button.jsx";

function Item({img,name,desc,price, newClass}) {
    return (
        <div className={`item ${newClass}`}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{desc}</p>
            <span className="price">
                ${price}
                <Button desc="Order Now" />
                </span>
        </div>
    )
}

export default Item
