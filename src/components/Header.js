import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={Logo} alt="" height="50px" width="180px" />
      </Link>
      <Link className="link" to="/cart">
        <p className="cart-icon">
          <AiOutlineShoppingCart size={50} />
        </p>
      </Link>
    </div>
  );
};

export default Header;
