import React from 'react';
import Heart from './Heart';
import Search from './Search';
import Starbucks from './Starbucks';
import Live from './Live';
import Location from './Location';

const IconTypes = {
'heart':Heart,
'search':Search,
'starbucks':Starbucks,
'live':Live,
'location': Location
}

const Icon = props =>{
    const { type } = props;
    if(type && IconTypes[type]){
        return React.createElement( IconTypes[type], {...props}, props.children);
    }
    return null;
}

export  { Icon };