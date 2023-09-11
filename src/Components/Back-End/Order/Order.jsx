// Export the corrected component name "Orders"
import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../../CheckoutProduct/CheckoutProduct";
// import { useStateValue } from "../../StateProvider/StateProvider";
function Order({ order }) {
  return (
    <div className="order">
      <h2 className="order_titel">Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:ma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h2 className="order_total">Order Total: {value}</h2>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
