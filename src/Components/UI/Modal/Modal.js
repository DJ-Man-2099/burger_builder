import React, {useContext, useEffect} from 'react';
import classes from './Modal.module.css'
import Aux from '../../../HOC/Aux'
import BackDrop from '../BackDrop/BackDrop';
import OrderContext from '../../../Context/OrderSummaryContext'
 
const Modal = (props) => {
    const context = useContext(OrderContext).cancel;

    useEffect(() => {
        console.log("[modal] is updated");
    },[props.show]);

    return (
        <Aux>
        <BackDrop show={props.show} onClick={context}/>
        <div className={classes.Modal} style={{
            transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show? '1' : '0',
        }}>
            {props.children}
        </div>
        </Aux>
    );
}
 
export default Modal