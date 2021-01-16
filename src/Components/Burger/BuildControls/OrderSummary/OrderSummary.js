import React, { useContext, useEffect } from 'react';
import IngContext from '../../../../Context/OrderSummaryContext';
import Aux from '../../../../HOC/Aux';
import Button from '../../../UI/Button/Button';
 
const OrderSummary = (props) => {

    const ingredients = useContext(IngContext);
    
    useEffect(() => {
        console.log('[order summary] is updated')
    },[props.show]);

    const ingSumm = Object.keys(ingredients.ingredients).map(
        ing => {
            if (ingredients.ingredients[ing]!==0) {
              return (<li key={ing}>
                <span style={{
                textTransform: 'capitalize'
            }}>{ing}</span>
            : {ingredients.ingredients[ing]}</li>);  
            }
            return null;
        }
    );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Thank you for using our BurgerBuilder App<br/> 
            Your Burger contains the following items:</p>
            <ul>
            {ingSumm}
            </ul>
            <p><strong>Total Price: {ingredients.price}</strong></p>
            <p>Continue to Checkout??</p>
            <Button onClick={ingredients.cancel} type='Danger'>Cancel</Button>
            <Button onClick={ingredients.continue} type='Success'>Continue</Button>
        </Aux>
    );
}
 
export default OrderSummary