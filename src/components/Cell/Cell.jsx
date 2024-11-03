import React from 'react';
import classes from './Cell.module.css'

const Cell = ({src, ...props}) => {
    return (
        <button {...props} className={classes.cell}>
            <img src={src} alt=""/>
        </button>
    );
};

export default Cell;