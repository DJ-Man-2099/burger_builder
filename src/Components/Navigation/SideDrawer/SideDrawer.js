import classes from './SideDrawer.module.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import Aux from '../../../HOC/Aux';
import BackDrop from '../../UI/BackDrop/BackDrop'
 
const SideDrawer = (props) => {

    return (
        <Aux>
        <BackDrop show={props.show} onClick={props.cancel}/>
        <div className={[classes.SideDrawer,(props.show?classes.Open:classes.Close)].join(' ')}>
        <div className={classes.Logo}>    
        <Logo/>
        </div>
            <nav>
            <Items/>
            </nav>
        </div>
        </Aux>
    );
}
 
export default SideDrawer