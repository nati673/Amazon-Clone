import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_rigth">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
