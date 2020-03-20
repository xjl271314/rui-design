import React from 'react';
import CutDown from './CutDown';
import Bubble from './Bubble';

const ButtonTypes = {
'cutdown':CutDown,
'bubble':Bubble
}

const Button = props =>{
    const { type } = props;
    if(type && ButtonTypes[type]){
        return React.createElement( ButtonTypes[type], {...props}, props.children);
    }
    return <button {...props}>{props.children}</button>
}

export  { Button };