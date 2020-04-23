import ClassNames from 'classnames';

// prefixCls
export const prefixCls =  window.theme.concat('card');

// classes
export const classes = ({ className }, ...others)=> ClassNames(
    prefixCls,
    className,
    ...others
)