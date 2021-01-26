import React, { useContext } from 'react';
import IngContext from '../../../../Context/OrderSummaryContext';
import Aux from '../../../../HOC/Aux/Aux';
import Button from '../../../UI/Button/Button';
 
const OrderSummary = (props) => {
    
    //IMPORTANT: Using "useContext" or "useEffect" will trigger a re-render if changed,
    //even if React.memo is used with checking
    const ingredients = useContext(IngContext);

    const ingSumm = Object.keys(ingredients.ingredients).map(
        ing => {
            if (ingredients.ingredients[ing].quantity!==0) {
              return (<li key={ing}>
                <span style={{
                textTransform: 'capitalize'
            }}>{ing}</span>
            : {ingredients.ingredients[ing].quantity}</li>);  
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

const check=(prev, next)=>prev.show===next.show

export default React.memo(OrderSummary,check)