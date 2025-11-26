import { handleBtnClick } from "../../helper/buttonEffect";

function Item({ img, name, desc, price, newClass }) {
  return (
    <div className={`item ${newClass}`}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">
        ${price}
        <Button onClick={(e) => handleBtnClick(e)} />
      </span>
    </div>
  );
}

function Button({ onClick }) {
  return (
    <a href="tel:0900007609">
      <button onClick={onClick} className={`item-btn`}>
        Call Now
      </button>
    </a>
  );
}

export default Item;
