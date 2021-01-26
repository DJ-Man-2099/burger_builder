import React, {useState} from 'react';
import Wrapper from '../../HOC/Aux/Aux'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import classes from './Layout.module.css'

const Layout = (props) => {
    const [visible,switchVisible] = useState(false);

    const show = () => {
        switchVisible(true)
    }

    const hide = () => {
        switchVisible(false)
    }

    return (
        <Wrapper>
            <ToolBar menuClicked={show}/>
            <SideDrawer show={visible} cancel={hide}/>
            <main className={classes.MAIN}>
                {props.children}
            </main>
        </Wrapper>
    );
}

export default Layout