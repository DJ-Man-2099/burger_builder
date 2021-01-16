import React from 'react';
import classes from './Burger.module.css'
import Ingredient from './Ingredients/Ingredients'

const Burger = (props) => {

    let Fillings = Object.keys(props.ingredients).map(
        inge => {
            let t = [];
            for (let index = 0; index < props.ingredients[inge]; index++) {
                t.push(<Ingredient key={inge + index} type={inge} />);
            }
            return t;
        } //the "reduce" function changes the multi-dimensional array into a 1-D array
    ).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (Fillings.length === 0) Fillings = <p>Start Adding Ingredients !!!!</p>

    return (
        <div className={classes.Burger}>
            <Ingredient type="Bun Top" />
            {Fillings}
            <Ingredient type="Bun Bottom" />
        </div>
    );
}

export default Burger