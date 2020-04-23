import React, { useRef, useEffect } from 'react';
import { classes } from '../utils';
import './index.scss';

/**
 * 直播中的按钮样式
 * @param {number} number 支持3根竖线和4根竖线两种模式 
 */
const IconLive = props => {
    const {
        onClick = () => { }
    } = props;

    const $ref = useRef();
    const number = props.number === 3 ? 3 : 4;
    
    useEffect(() => {
        let i = 0;
        let timer = setInterval(() => {
            const line = document.createElement('div');
            $ref.current.appendChild(line);
            i++;
            if (i === number) {
                i = 0;
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [number]);

    return (
        <div
            ref={$ref}
            className={classes(props,`live${number}`)}
            onClick={onClick}
        />
    )
}

export default IconLive;