import React, { useEffect, useRef, useState } from 'react';

import styles from './index.m.less';

const SvgCircleProgress = props => {
    const {
        linearGradient = true,
        size = '3.28rem',
        count = 10,
        strokeWidth = '0.2rem',
        strokeLinecap = 'butt',
        color = [
            {
                offset: 0,
                color: 'pink'
            },
            {
                offset: 30,
                color: 'red'
            },
            {
                offset: 60,
                color: 'green'
            },
            {
                offset: 100,
                color: 'blue'
            }
        ],
    } = props;

    const svgBox = useRef({}).current;
    const [isAnimated, setIsAnimated] = useState(true);

    // 支持line-gradient
    const Linegradient = () => {
        if (linearGradient) {
            if (Array.isArray(color)) {
                // 是否是数组对象
                const isObj = Object.values(color).every(item => item.hasOwnProperty('color'));

                if (!isObj) {
                    const len = color.length;
                    if (len > 1) {
                        const mode = len - 1;
                        const d = 100 / mode;
                        const offset = Array(color.length).fill(1).map((item, index) => index * d + '%');

                        return (
                            <defs>
                                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        offset.map((item, index) => (
                                            <stop key={`color-${index.toString()}`} offset={item} stopColor={color[index]} />
                                        ))
                                    }
                                </linearGradient>
                            </defs>
                        )
                    }

                    return (
                        <defs>
                            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={color[0]} />
                                <stop offset="100%" stopColor={color[0]} />
                            </linearGradient>
                        </defs>

                    )
                }

                const isNumber = (obj) => {
                    return !isNaN(parseFloat(obj)) && isFinite(obj);
                }

                return (
                    <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                            {
                                Object.values(color).map((item, index) => (
                                    <stop key={`color-${index.toString()}`} offset={isNumber(item.offset) ? `${item.offset}%` : item.offset} stopColor={item.color} />
                                ))
                            }
                        </linearGradient>
                    </defs>
                )

            }
        }

        return null;
    }

    // 自定义颜色
    const getColor = () => {
        if (typeof color === 'string') {
            return color;
        }

        if (Array.isArray(color) && !linearGradient) {
            console.warn('需要开启linearGradient参数才可以使用渐变');
        }

        console.warn('如果不提供color属性的话默认是返回#000');

        return '#000';
    };

    const getUnit = (key, compare) => key !== compare ? compare.toString().substring(String(key).length) : '';

    const getRadius = () => {
        if (size) {
            const val = parseFloat(size);
            const stroke = parseFloat(strokeWidth);

            const sizeUnit = getUnit(val, size);

            const radius = val / 2 + sizeUnit;
            const innerRadius = (val / 2 - stroke / 2) + sizeUnit;

            return {
                outer: radius,
                inner: innerRadius,
            }

        }

        return {
            outer: '',
            inner: '',
        }
    }

    const getDashArray = () => {
        const PI = Math.PI;
        const val = parseFloat(size);
        const sizeUnit = getUnit(val, size);

        const rootFontSize = getComputedStyle(document.querySelector('html')).fontSize;

        if (sizeUnit === 'rem' && rootFontSize) {
            return PI * val * parseInt(rootFontSize);
        }

        if (sizeUnit === 'px') {
            return PI * val;
        }

        return PI * val;
    }

    // 动态插入@keyframes
    useEffect(() => {
        setTimeout(() => {
            setIsAnimated(false);
        }, 0)
    }, []);

    return (
        <div ref={svgBox} className={styles.svgBox} style={{ width: size, height: size }}>
            <svg className={styles.svg}>
                <Linegradient />
                <circle cx="50%" cy="50%" r={getRadius().inner} fill="black" strokeWidth={0} ></circle>
                <circle className={styles.progress} style={{ strokeDasharray: getDashArray(), transitionDuration: `${count}s`, strokeDashoffset: isAnimated ? 0 : getDashArray() }} cx="50%" cy="50%" r={getRadius().outer} fill="transparent" stroke={linearGradient ? `url(#linear)` : getColor()} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}></circle>
            </svg>
        </div >
    )
};

export default SvgCircleProgress;