/*
 * 环形进度条组件
 * 目前支持两种渲染模式, SVG 和 CSS, CSS不支持渐变色
 * @Author: xjl
 * @Date: 2021-04-06 11:36:33
 * @Last Modified by: xjl
 * @Last Modified time: 2021-04-06 20:42:45
 */

import React from 'react';

import CssCircleProgress from './css';
import SvgCircleProgress from './svg';

const CircleProgress = (props) => {
    const {
        render = 'css',
    } = props;

    if (render === 'css') {
        return <CssCircleProgress {...props} />
    }

    return <SvgCircleProgress {...props} />
};

export default CircleProgress;
