/*
 * CSS实现的环形进度条组件
 * @Author: xjl
 * @Date: 2021-04-06 11:36:33
 * @Last Modified by: xjl
 * @Last Modified time: 2021-04-06 20:45:43
 */

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './index.m.less';


const CssCircleProgress = (props) => {
    const {
        size = '200px',
        count = 10,
        strokeWidth = '10px',
        color = 'rgba(255, 16, 55, 1)',
    } = props;

    const [newCount, setNewCount] = useState(count);
    const [rightAnimated, setRightAnimated] = useState(false);
    const [leftAnimated, setLeftAnimated] = useState(false);

    // 自定义颜色
    const getColor = (color, key) => {
        if (typeof color === 'object' && key) {
            if (Array.isArray(color)) {
                const index = key === 'left' ? 0 : 1;
                return color[index] || color[0];
            }

            return color[key];
        }

        if (typeof color === 'string') {
            return color;
        }

        console.warn('如果不提供color属性的话默认是返回#000');

        return '#000';
    };

    // 获取clip值
    const getClip = (key) => {
        if (size) {
            const val = parseFloat(size);
            const unit = val !== size ? size.toString().substring(String(val).length) : '';
            const halfSize = val / 2 + unit;

            if (key === 'left') {
                return `rect(0, ${halfSize}, ${size}, 0)`;
            }

            return `rect(0, ${size}, ${size}, ${halfSize})`
        }

        return '';
    }


    const useInterval = (callback, delay = 1000) => {
        const intervalFn = useRef({});

        useEffect(() => {
            intervalFn.current.callback = callback;
        }, [callback]);

        // set the interval
        useEffect(() => {
            if (delay !== null) {
                intervalFn.current.timer = setInterval(() => {
                    intervalFn.current.callback();
                }, delay);
                return () => {
                    clearInterval(intervalFn.current.timer);
                };
            }
        }, [delay]);

        return intervalFn.current.timer;
    }

    useInterval(() => {
        if (count > 0) {
            setNewCount(pcount => pcount - 1);
        }
    }, newCount > 0 ? 1000 : null);

    return (
        <div className={classNames(styles.circleContainer, props.wrapClassName)} style={{ width: size, height: size }}>
            <div className={classNames(styles.wrap, styles.wrapLeft)}>
                <div className={classNames(styles.left, { [styles.fnished]: leftAnimated })}
                    style={{ borderColor: getColor(color, 'left'), borderWidth: strokeWidth, animationDuration: `${count / 2}s`, animationDelay: `${count / 2}s`, clip: getClip('left') }} onAnimationEnd={() => { setLeftAnimated(true); console.log('CSS动画执行结束'); }}></div>
            </div>

            <div className={classNames(styles.wrap, styles.wrapRight)}>
                <div className={classNames(styles.right, { [styles.fnished]: rightAnimated })}
                    style={{ borderColor: getColor(color, 'right'), borderWidth: strokeWidth, animationDuration: `${count / 2}s`, clip: getClip('right') }} onAnimationEnd={() => setRightAnimated(true)}></div>
            </div>
            <div className={classNames(styles.circle, props.className)} style={{ width: `calc(100% - ${strokeWidth})`, height: `calc(100% - ${strokeWidth})` }}>
                {props.children}
            </div>
        </div>
    )


};

export default CssCircleProgress;
