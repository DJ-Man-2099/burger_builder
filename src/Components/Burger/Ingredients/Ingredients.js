import React from 'react';
import classes from './Ingredients.module.css'
import PropTypes from 'prop-types'

const Ingredient = (props) => {
    let inge = null;

    switch (props.type) {
        case ("Bun Bottom"):
            inge = <div className={classes.BreadBottom}></div>
            break;
        case ("Bun Top"):
            inge = <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
            </div>
            break;
        case ("Meat"):
            inge = <div className={classes.Meat}></div>
            break;
        case ("Cheese"):
            inge = <div className={classes.Cheese}></div>
            break;
        case ("Salad"):
            inge = <div className={classes.Salad}></div>
            break;
        case ("Bacon"):
            inge = <div className={classes.Bacon}></div>
            break;
        default:
            inge = null
            break;
    }

    return inge;
}

export default Ingredient

Ingredient.propsTypes = {
    type: PropTypes.string.isRequired 
}