import React from "react";
import classes from "./styles/Header.module.css";
import pizzaImage from "../../assets/pizza.jpg";
import CartBtn from "./CartBtn";

const Header = (props) => {
  return (
    <>
      <header className={classes.wrapper}>
        <div className={classes.header}>
        <h1>React Food App</h1>
        <CartBtn />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="Pizza Image here" />
      </div>
    </>
  );
};

export default Header;
