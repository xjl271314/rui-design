import ClassNames from 'classnames';

const SHAPES = ['circle', 'round'];

// shapeCls
export const shapeCls = shape => SHAPES.includes(shape) ? shape : '';

// iconNode
export const iconNode = icon => icon || null;

// prefixCls
export const prefixCls =  window.theme.concat('btn');


// sizeCls
export const sizeCls = size =>{
    let sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
            break;
        default:
            sizeCls = 'md';
            break;
    }
    return sizeCls;
}

// classes
export const classes = ({ className, type, shape, size = 'md' }, ...others)=> ClassNames(
    prefixCls,
    className,
    {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${shape}`]: shapeCls(shape),
        [`${prefixCls}-${sizeCls(size)}`]: sizeCls(size),
    },
    ...others
)