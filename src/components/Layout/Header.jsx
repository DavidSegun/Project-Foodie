import React, {Fragment } from 'react';
import imageMeal from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
 return (
    <Fragment>
    <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton/>
    </header>
    <div className={['main-image']}>
        <img src={imageMeal} alt="imgMeal"/>
    </div>
    </Fragment>
 )
}

export default Header