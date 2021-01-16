import classes from './Item.module.css';
import React from 'react';
import PropTypes from 'prop-types'
 
const Item = (props) => {
    return (
        <li className={classes.Item}>
        <a href={props.link} className={props.active?classes.active:null}>{props.children}</a>
        </li>
    );
}
 
export default Item

Item.propTypes = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool,
}