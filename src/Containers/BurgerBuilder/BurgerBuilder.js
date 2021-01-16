import React, { Component } from 'react'
import Aux from '../../HOC/Aux'
import Burger from '../../Components/Burger/Burger'
import Controller from '../../Components/Burger/BuildControls/BuildControls'
import BurgerContext from '../../Context/ControllerContext'
import Modal from '../../Components/UI/Modal/Modal'
import OrderContext from '../../Context/OrderSummaryContext'
import OrderSummary from '../../Components/Burger/BuildControls/OrderSummary/OrderSummary'

const IngPrice = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7,
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0,
        },
        Price: 4,
        canOrder: false,
        clicked: false,
    }

    changeCanOrder = (ing) => {
        const sum = Object.keys(ing).map(
            key => ing[key]
        ).reduce(
            (sum, ele) => sum + ele, 0
        );
        this.setState({
            canOrder: sum > 0
        });
    }

    add = (type) => {
        const old = this.state.ingredients[type] + 1;
        const ing = {
            ...this.state.ingredients
        }
        ing[type] = old;
        const added = IngPrice[type] + this.state.Price;
        this.setState(
            {
                ingredients: ing,
                Price: added
            }
        );
        this.changeCanOrder(ing);
    }

    sub = (type) => {
        if (this.state.ingredients[type] > 0) {
            const old = this.state.ingredients[type] - 1;
            const ing = {
                ...this.state.ingredients
            }
            ing[type] = old;
            const added = this.state.Price - IngPrice[type];
            this.setState(
                {
                    ingredients: ing,
                    Price: added
                }
            );
            this.changeCanOrder(ing);
        }
    }

    buy = () =>{
        this.setState({
            clicked: true,
        });
    }

    hide = () =>{
        this.setState({
            clicked: false,
        });
    }

    continue = () =>{
        this.setState({
            clicked: false,
        });
        alert("Successfully Purchased");
    }

    render() {

        const disabled = {
            ...this.state.ingredients
        };

        for (const key in disabled) {
            disabled[key] = disabled[key] <= 0
        }

        return (
            <Aux>
            <OrderContext.Provider value={
                {
                    ingredients: this.state.ingredients,
                    cancel: this.hide,
                    continue: this.continue,
                    price: this.state.Price.toFixed(2),
                }
            }>
            <Modal show={this.state.clicked}>
            <OrderSummary show={this.state.clicked}/>
            </Modal>
            </OrderContext.Provider>
                <Burger ingredients={this.state.ingredients} />
                <BurgerContext.Provider value={
                    {
                        add: this.add,
                        remove: this.sub,
                        disabled: disabled,
                    }
                } >
                    <Controller Price={this.state.Price} canOrder={this.state.canOrder} clicked = {this.buy}/>
                </BurgerContext.Provider >
            </Aux>
        );
    }
}

export default BurgerBuilder