/*
 * @Prd: 
 * @Link: 
 * @Author: xjl
 * @Email: xujl@weipaitang.com
 * @Date: 2020-03-28 10:57:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-23 15:19:23
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
        >
            <svg  
                viewBox="0 0 1024 1024" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
            ><path d="M711.04 662.016l192.448 192.448a34.688 34.688 0 0 1-48.96 49.056l-192.512-192.48a345.216 345.216 0 0 1-219.392 78.24C251.2 789.28 96 634.08 96 442.624 96 251.2 251.2 96 442.624 96c191.456 0 346.656 155.2 346.656 346.624 0 83.232-29.344 159.616-78.24 219.392z m-268.416 57.92a277.312 277.312 0 1 0 0-554.624 277.312 277.312 0 0 0 0 554.624z" fill="#cccccc" p-id="1213"></path>
            </svg>
        </div>
    )
}

export default IconSearch;