import React from 'react';
import classes from './BuildControls.module.css'
import Control from './Control/Control'

const Conts = [
    { type: 'Salad' },
    { type: 'Bacon' },
    { type: 'Cheese' },
    { type: 'Meat' },
];

const Controls = (props) => {


    return (
        <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.Price.toFixed(2)}</strong></p>
        {Conts.map(
            value => <Control key={value.type} label={value.type} />
        )}
        <button className={classes.OrderButton} disabled={!props.canOrder} onClick={props.clicked}>Order NOW !!!</button>
        </div>
    );
}

export default Controls