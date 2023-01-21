import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadercartButton.module.css";
import CartContext from "../../store/Cart-Context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
