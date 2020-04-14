import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import Types from '@utils/type';
import './index.scss';

// 速度间隔
const SPEED_TYPES = {
    normal: 200,
    quick: 150,
    fast: 100
};

// 动画类型
const ANIMATE_TYPES = {
    normal:'normal',
    left:'left',
    right:'right',
    up:'up',
    down:'down',
    random:'random'
};

const TextTransition = props => {
    const $ref = useRef();
    const txt = props.text || props.children;
    const {
        className = '',
        type = 'normal',
        speed = 200
    } = props;

    useEffect(()=>{
        if (Types.isString(txt)) {
            let i = 0;
            let timer = setInterval(() => {
                const span = document.createElement('span');
                const textNode = document.createTextNode(txt[i]); 
                span.appendChild(textNode);
                $ref.current.appendChild(span);
                i++;
                if (i === txt.length){
                    i = 0;
                    clearInterval(timer);
                }
            }, SPEED_TYPES[speed] || speed);

            return () => clearInterval(timer);
        }
    },[speed, txt])

    return (
        <div ref={$ref} className={classNames(className, ANIMATE_TYPES[type], 'wrap')}></div>
    );
};


export {
    TextTransition
};