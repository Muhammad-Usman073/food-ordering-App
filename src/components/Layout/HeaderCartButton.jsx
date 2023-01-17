import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadercartButton.module.css";
import CartContext from "../../store/Cart-Context";
const HeaderCartButton = (props) => {

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon  />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
