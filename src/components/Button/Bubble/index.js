import React, { useRef } from 'react';
import Loading from '@components/Loading';
import { classes, iconNode } from '../utils';
import './index.scss';

const Bubble = props => {
    // 初始化props
    const {
        icon,
        disabled = false,
        loading = false,
        text = 'click me',
        ...rest
    } = props;
    // 内置了几种加载动画 
    const INITIAL_LOADING_TYPE = props.loadType || 'circle';
    const INITIAL_LOADING_POSITION = props.loadPosition || 'right';
    const myButton = useRef(null);

    const handleClick = () => {
        myButton.current.classList.add('animate');
        props.onClick && props.onClick();
        setTimeout(() => {
            myButton.current.classList.remove('animate');
        }, 500);
    }
    return (
        <button
            ref={myButton}
            className={classes(props)}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
        >
            {iconNode(icon)}
            {
                typeof text === 'string' ? <span>{text}</span> : props.children
            }
            {loading && <Loading type={INITIAL_LOADING_TYPE} postion={INITIAL_LOADING_POSITION} />}
        </button>
    )
};

export default Bubble;