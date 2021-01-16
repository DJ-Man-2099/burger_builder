import React from 'react';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import classes from './ToolBar.module.css'

const ToolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <div onClick={props.menuClicked}>Menu</div>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
            <Items/>
            </nav>
        </header>
    );
}
 
export default ToolBar