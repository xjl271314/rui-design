import React, { useRef } from 'react';
import Loading from '@components/Loading';
import ClassNames from 'classnames';
import { classes, iconNode } from '../utils';
import './index.scss';

const Stroke = props => {
    // 初始化props
    const {
        icon,
        disabled = false,
        loading = false,
        text = 'click me',
        direction = 'left',
        speed = '',
        ...rest
    } = props;
    // 内置了几种加载动画 
    const INITIAL_LOADING_TYPE = props.loadType || 'circle';
    const INITIAL_LOADING_POSITION = props.loadPosition || 'right';
    const myButton = useRef(null);

    const handleClick = () => {
        props.onClick && props.onClick();
    }
    return (
        <button
            ref={myButton}
            className={ClassNames(classes(props), direction, speed)}
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

export default Stroke;