import React from 'react';
import { classes } from '../utils';
import './index.scss';

const IconLocation = props => {
    const {
        onClick =() =>{}
    } = props;

    return (
        <div 
            className={classes(props)}
            onClick = {onClick}
        >
            <div className='pin'></div>
            <div className='pulse'></div>
        </div>
    )
}

export default IconLocation;