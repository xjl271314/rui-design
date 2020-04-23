import React from 'react';
import classNames from 'classnames';
import { prefixCls } from '../utils';
import '../index.scss';

const CardHeader = props => {
    const {
        className,
        thumb,
        thumbClassName,
        title = "11111",
        extra = 111,
        ...rest
    } = props;

    const wrapCls = classNames(`${prefixCls}-header`, className);

    return (
        <div className={wrapCls} {...rest}>
            <div className={`${prefixCls}-header-content`}>
                {typeof thumb === 'string' ? <img className={thumbClassName} src={thumb} /> : thumb }
                {typeof title === 'string' ? <h2>title</h2> : title}
            </div>
            {extra ? (
                <div className={`${prefixCls}-header-extra`}>{extra}</div>
            ) : null}
        </div>
    )
}

export default CardHeader;