import React, { Component } from "react";
import Aux from "../../HOC/Aux/Aux";
import Burger from "../../Components/Burger/Burger";
import Controller from "../../Components/Burger/BuildControls/BuildControls";
import BurgerContext from "../../Context/ControllerContext";
import Modal from "../../Components/UI/Modal/Modal";
import OrderContext from "../../Context/OrderSummaryContext";
import OrderSummary from "../../Components/Burger/BuildControls/OrderSummary/OrderSummary";
import Axios from "../../BackEnd/BackEnd";
import Spinner from "../../Components/UI/Spinner/Spinner";
import ErrorHandler from '../../HOC/ErrorHandler/ErrorHandler'

/* const IngPrice = {
  Salad: 0.5,
  Cheese: 0.4,
  Meat: 1.3,
  Bacon: 0.7,
}; */

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    Price: 4,
    canOrder: false,
    clicked: false,
    loading: false,
    initially: true
  };

  changeCanOrder = (ing) => {
    const sum = Object.keys(ing)
      .map((key) => ing[key])
      .reduce((sum, ele) => sum + ele.quantity, 0);
    this.setState({
      canOrder: sum > 0,
    });
  };

  add = (type) => {
    const old = this.state.ingredients[type].quantity + 1;
    const ing = {
      ...this.state.ingredients,
    };
    ing[type].quantity = old;
    const added = this.state.ingredients[type].price + this.state.Price;
    this.setState({
      ingredients: ing,
      Price: added,
    });
    this.changeCanOrder(ing);
  };

  sub = (type) => {
    if (this.state.ingredients[type].quantity > 0) {
      const old = this.state.ingredients[type].quantity - 1;
      const ing = {
        ...this.state.ingredients,
      };
      ing[type].quantity = old;
      const added = this.state.Price - this.state.ingredients[type].price;
      this.setState({
        ingredients: ing,
        Price: added,
      });
      this.changeCanOrder(ing);
    }
  };

  buy = () => {
    this.setState({
      clicked: true,
    });
  };

  hide = () => {
    this.setState({
      clicked: false,
    });
  };

  continue = () => {
    this.setState({
      loading: true,
    });
    //alert("Successfully Purchased");
    const order = {
      ingredients: this.state.ingredients,
      //make sure to calculate price in backend
      price: this.state.Price.toFixed(2),
      customer: {
        name: "David",
        id: "1600531",
      },
      email: "test@test.com",
      deliveryMethod: "fastest",
    };
    Axios.post("orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({
          clicked: false,
          loading: false,
        });
        this.LoadIngredients();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          clicked: false,
          loading: false,
        });
      });
  };

  render() {
    const disabled = {
      ...this.state.ingredients,
    };

    for (const key in disabled) {
      disabled[key] = disabled[key].quantity <= 0;
    }

    let Summary = <OrderSummary show={this.state.clicked} />;
    if (this.state.loading) {
      Summary = <Spinner />;    
    }

    let app = <Modal show={this.state.initially}><Spinner /></Modal>;
    if(this.state.ingredients===null && !this.state.initially){
      app = <div style={{
        display: "block",
        margin: 'auto',
        width: '100%'
      }}>App Can't Start!!!!!!!!!</div>
    }
    if (this.state.ingredients!==null) {
        app = (
            <Aux>
              <OrderContext.Provider
                value={{
                  ingredients: this.state.ingredients,
                  cancel: this.hide,
                  continue: this.continue,
                  price: this.state.Price.toFixed(2),
                }}
              >
                <Modal show={this.state.clicked} onClick={this.hide}>{Summary}</Modal>
              </OrderContext.Provider>
              <Burger ingredients={this.state.ingredients} />
              <BurgerContext.Provider
                value={{
                  add: this.add,
                  remove: this.sub,
                  disabled: disabled,
                }}
              >
                <Controller
                  Price={this.state.Price}
                  canOrder={this.state.canOrder}
                  clicked={this.buy}
                />
              </BurgerContext.Provider>
            </Aux>
          )
    }
    return app;
  }

  componentDidMount(){
      this.LoadIngredients();
  }

  LoadIngredients() {
    Axios.get('Ingredients.json').then(res => {
      
      const price = Object.keys(res.data).map(
        key => res.data[key]
      ).reduce((sum, ing)=>{
        return sum+(ing.price*ing.quantity)
      },0)
      this.setState({
        initially: false,
        ingredients: { ...res.data },
        Price: 4+price
      });
      this.changeCanOrder(this.state.ingredients);
    }).catch(
      error=> this.setState({
        initially: false
      })
    );
  }
}

export default ErrorHandler(BurgerBuilder, Axios);
