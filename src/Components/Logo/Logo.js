import classes from './Logo.module.css';
import React from 'react';
import image from '../../Assets/Images/burger-logo.png'
 
const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={image} alt='burger logo'/>
        </div>
    );
}
 
export default Logo