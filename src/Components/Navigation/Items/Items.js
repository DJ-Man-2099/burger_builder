import classes from './Items.module.css';
import React from 'react';
import Item from './Item/Item';
 
const Items = (props) => {
    return (
        <ul className={classes.Items}>
            <Item link='/' active>Burger Builder</Item>
            <Item link='/'>Checkout</Item>
        </ul>
    );
}
 
export default Items