import React from 'react';
import Notification from 'rc-notification';
import classNames from 'classnames';
import { Icon } from '../Icon';
import './index.scss'

const iconType = {
    success: 'success',
    warning: 'warning',
    info: 'info',
    error: 'error'
}

const adapterPos = {
    topLeft: {
      top: '24px',
      left: '24px'
    },
    topRight: {
      top: '24px',
      right: '24px'
    },
    bottomLeft: {
      bottom: '24px',
      left: '24px'
    },
    bottomRight: {
      bottom: '24px',
      right: '24px'
    }
};

const MyNotification = (function () {
    let notification = null
    /**
       * notice类型弹窗
       * @param {config}  object 通知框配置属性
       *   @param {type} string 通知窗类型
       *   @param {btn}  ReactNode 自定义关闭按钮
       *   @param {bottom}  number 消息从底部弹出时，距离底部的位置，单位像素
       *   @param {className}  string 自定义 CSS class
       *   @param {description}  string|ReactNode 通知提醒内容，必选
       *   @param {duration}  number 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
       *   @param {getContainer}  HTMLNode 配置渲染节点的输出位置
       *   @param {icon}  ReactNode 自定义图标
       *   @param {key}  string 当前通知唯一标志
       *   @param {message}  string|ReactNode 通知提醒标题，必选
       *   @param {onClose}  func 点击默认关闭按钮时触发的回调函数
       *   @param {onClick}  func 点击通知时触发的回调函数
       *   @param {top}  number 消息从顶部弹出时，距离顶部的位置，单位像素
       *   @param {closeIcon}  ReactNode 自定义关闭图标
       */
    const pop = (config) => {
        const {
            type, bottom, className, description, duration = 4.5,
            getContainer = () => document.body, icon,
            key, message, onClose, onClick, top, closable = true, closeIcon
        } = config
        notification.notice({
            content: <div className={classNames('Notice', className)}>
                {
                    (icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) &&
                    <div className={classNames('iconWrap', type)}>
                        {
                            icon ? icon : <Icon type={iconType[type]} />
                        }
                    </div>
                }

                <div>
                    <div className="NoticeTit">
                        {message}
                    </div>
                    <div className="NoticeDesc">
                        {description}
                    </div>
                </div>
            </div>
        })
    }
    /**
       * 通知提示组件, 全局参数
       * @param {bottom} number 消息从底部弹出时，距离底部的位置，单位像素， 默认24
       * @param {duration} number 默认自动关闭延时，单位秒
       * @param {getContainer} HTMLNode 配置渲染节点的输出位置，默认document.body
       * @param {placement} string 弹出位置，可选 topLeft topRight bottomLeft bottomRight
       * @param {top} number 消息从顶部弹出时，距离顶部的位置，单位像素
       * @param {closeIcon} HTMLNode 自定义关闭图标
    */
    const config = (config) => {
        const { duration, getContainer, placement, closeIcon } = config
        Notification.newInstance({
            getContainer: getContainer,
            duration: duration || 4.5,
            closeIcon,
            style: {...adapterPos[placement] },
        }, (notice) => notification = notice)
    }

    if (notification) {
        return {
            config,
            pop
        }
    }
    // 如果为创建实例，则创建默认实例
    Notification.newInstance({}, (notice) => notification = notice)
    return {
        config,
        pop
    }
})()

export default MyNotification;
