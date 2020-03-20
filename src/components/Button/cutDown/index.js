import React, { useState } from 'react';
import { useInterval } from '@src/hooks';
import Loading from '@components/Loading';
import { classes, iconNode } from '../utils';
import './index.scss';

const CutDownBtn = props => {
    // 初始化props
    const {
        icon,
        ...rest
    } = props;

    // 默认状态码
    const INITIAL_TIME = props.time || 60;
    const INITIAL_TEXT = props.text || '获取验证码';
    const INITIAL_SENDING_TEXT = props.sendingText || 's后重新获取';
    const INITIAL_DOWN_TEXT = props.downText || '重新获取';
    const INITIAL_SHOW_LOADING = props.loading || false;
    // 内置了几种加载动画 
    const INITIAL_LOADING_TYPE = props.loadType || 'circle';
    const INITIAL_LOADING_POSITION = props.loadPosition || 'right';
    // 控制倒计时时间
    const [time, setTime] = useState(INITIAL_TIME);
    // 显示初始化文本
    const [text, setText] = useState(INITIAL_TEXT);
    // 控制按钮是否禁用点击
    const [isSending, setIsSending] = useState(false);
    // 控制是否显示loading
    const [showLoading, setShowLoading] = useState(false);
    // 点击事件
    const handleClick = e => {
        if (isSending) return

        INITIAL_SHOW_LOADING && setShowLoading(true);
        // 计时开始
        setTime(INITIAL_TIME);
        INITIAL_SHOW_LOADING && setShowLoading(false);
        setIsSending(true);
        // 执行方法
        props.onClick && props.onClick((e) => { })
    }
    useInterval(() => {
        if (time > 0) {
            setTime(time - 1);
            setText(`${time}${INITIAL_SENDING_TEXT}`);
        }
        else {
            setText(INITIAL_DOWN_TEXT);
            setIsSending(false)
        }
    }, isSending ? 1000 : null)
    return (
        <button
            className={classes(props)}
            onClick={handleClick}
            disabled={isSending}
            {...rest}
        >
            {iconNode(icon)}
            <span>{text}</span>
            {showLoading &&
                <Loading
                    type={INITIAL_LOADING_TYPE}
                    postion={INITIAL_LOADING_POSITION}
                />
            }
        </button>
    )
}

export default CutDownBtn