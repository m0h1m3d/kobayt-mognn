import Button from "../Button"

function Item({img,name,desc,price}) {
    return (
        <div className="item">
            <img src={img} height='400' alt={name} />
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
