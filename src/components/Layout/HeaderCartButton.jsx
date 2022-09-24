import React from 'react';
import CartIcon  from '../Cart/CartIcon';
import classes from './HeaderCart.module.css'
 
function HeaderCartButton () {
    return (
        <button>
            <CartIcon/>
            <span>Cart</span>
            <span className={classes.ba}>6</span>
        </button>
    )
}

export default HeaderCartButton ;