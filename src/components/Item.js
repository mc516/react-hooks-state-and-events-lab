import React, { useState }  from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true);

  const liClass = addToCart ? "" : "in-cart" 
  const itemInCart = liClass ? "Remove From Cart" : "Add to Cart"

  function handleToggleAddToCart() {
    setAddToCart((addToCart) => !addToCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleAddToCart}>{itemInCart}</button>
    </li>
  );
}

export default Item;
