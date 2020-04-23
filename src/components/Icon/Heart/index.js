import React from 'react';
import { classes } from '../utils';
import './index.scss';

const IconHeart = props => {
    const {
        onClick =() =>{}
    } = props;

    return (
        <div 
            className={classes(props)}
            onClick = {onClick}
        />
    )
}

export default IconHeart;