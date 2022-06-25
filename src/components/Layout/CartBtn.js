import classes from './styles/CartBtn.module.css'
import CartIcon from '../Cart/CartIcon'
import React from 'react';

const CartBtn = props => {
return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            5
        </span>
    </button>
)
}

export default CartBtn