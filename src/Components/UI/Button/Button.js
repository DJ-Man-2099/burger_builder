import classes from './Button.module.css';
import React from 'react';
 
const Button = (props) => {
    return (
        <button onClick={props.onClick} className={[classes.Button, classes[props.type]].join(' ')}>
            {props.children}
        </button>
    );
}
 
export default Button