import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handelAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <i class="material-icons">
          <SearchIcon className="header__searchIcon" />
        </i>
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handelAuthentication} className="header_optionlogin">
            <span className="header_option-One">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_option-Two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option remove_txt-deco">
            <span className="header_option-One">Returns</span>
            <span className="header_option-Two">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option-One">Your</span>
          <span className="header_option-Two">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header_opptionBasket">
            <ShoppingBasketIcon className="header__cart" />
            <span className="header_option-Two header_basketCount remove_txt-deco">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
