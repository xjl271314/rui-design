import React from 'react';
import CutDown from './CutDown';
import Bubble from './Bubble';
import Wave from './Waves';
import Stroke from './Stroke';

const ButtonTypes = {
'cutdown':CutDown,
'bubble':Bubble,
'wave':Wave,
'stroke': Stroke
}

const Button = props =>{
    const { type } = props;
    if(type && ButtonTypes[type]){
        return React.createElement( ButtonTypes[type], {...props}, props.children);
    }
    return <button {...props}>{props.children}</button>
}

export  { Button };