import React, { useState } from 'react';
import Wrapper from '../../HOC/Aux'
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <Wrapper>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className={classes.MAIN}>
                {props.children}
            </main>
        </Wrapper>
    );
}

export default Layout