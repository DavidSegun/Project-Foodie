import React from "react";
import classes from './MealsItems.module.css'
function MealsItems (props) {
const price = `$${props.price.toFixed(2)}`
    return(
     <li>
     <div>
        <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
     </div>
     </li>
    )

}

export default MealsItems;