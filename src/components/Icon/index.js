/*
 * @Prd: 
 * @Link: 
 * @Author: xjl
 * @Email: xujl@weipaitang.com
 * @Date: 2020-03-28 11:16:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-30 10:01:31
 */
import React from 'react';
import Heart from './Heart';
import Search from './Search';

const IconTypes = {
'heart':Heart,
'search':Search
}

const Icon = props =>{
    const { type } = props;
    if(type && IconTypes[type]){
        return React.createElement( IconTypes[type], {...props}, props.children);
    }
    return null;
}

export  { Icon };