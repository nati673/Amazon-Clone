import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Product({id, title , price, rating, image}) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
   dispatch({
     type: "ADD_TO_BASKET",
     item: {
      id: id,
       img: image,
       title: title,
       price: price,
       rating: rating,
     },
   });
  }
  return (
    <div className="product">
      <div className="products_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating) // The 'rating' variable is assumed to be a numerical value representing the rating of a product or item.
            .fill() // This creates an array with 'rating' number of undefined elements. The array is created to repeat the next element 'rating' times.
            .map(() => (
              // The 'map' function is called on the array, and it iterates over each element (which is undefined in this case).
              <p>⭐</p> // For each iteration, a paragraph (<p>) element with a star emoji (🌟) is returned. This creates 'rating' number of stars.
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
