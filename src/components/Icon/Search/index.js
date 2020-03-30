/*
 * @Prd: 
 * @Link: 
 * @Author: xjl
 * @Email: xujl@weipaitang.com
 * @Date: 2020-03-28 10:57:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-28 14:09:36
 */
import React from 'react';
import { classes } from '../utils';
import './index.scss';

const IconSearch = props => {
    const {
        onClick =() =>{}
    } = props;

    return (
        <div 
            className={classes(props)}
            onClick = {onClick}
        ></div>
    )
}

export default IconSearch;