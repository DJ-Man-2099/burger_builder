import React, { useContext } from 'react';
import classes from './Control.module.css';
import PropTypes from 'prop-types';
import bContext from '../../../../Context/ControllerContext'


const Control = (props) => {

    const ContContext = useContext(bContext);

    return (
        <div className={classes.Control}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} 
            onClick={ContContext.remove.bind(this, props.label)} 
            disabled={ContContext.disabled[props.label]}>Less</button>
            <button className={classes.More} 
            onClick={ContContext.add.bind(this, props.label)}>More</button>
        </div>
    );
}

export default Control

Control.propTypes = {
    label: PropTypes.string.isRequired
}