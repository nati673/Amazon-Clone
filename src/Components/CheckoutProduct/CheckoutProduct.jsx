import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
function CheckoutProduct({ id, img, title, price, rating, hideButton }) {
  const [{ }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout_product">
      <img className="checkoutProduct_Img" src={img} alt="" />
      <div className="checkoutproducts_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={RemoveFromBasket}>Remove frome Basket</button>
        )}{" "}
      </div>
    </div>
  );
}
export default CheckoutProduct;
