import React from 'react';
import classNames from 'classnames';
import { prefixCls } from '../utils';
import '../index.scss';

const CardFooter = props => {
    const {
        className,
        content,
        extra,
        ...rest
    } = props;

    const wrapCls = classNames(`${prefixCls}-footer`, className);

    return (
        <div className={wrapCls} {...rest}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
      </div>
    )
}

export default CardFooter;