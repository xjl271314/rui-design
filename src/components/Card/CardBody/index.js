import React from 'react';
import classNames from 'classnames';
import { prefixCls } from '../utils';
import '../index.scss';

const CardBody = props => {
    const {
        className,
        ...rest
    } = props;

    const wrapCls = classNames(`${prefixCls}-body`, className);

    return (
        <div className={wrapCls} {...rest} />
    )
}

export default CardBody;