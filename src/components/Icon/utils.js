import ClassNames from 'classnames';

// prefixCls
export const prefixCls =  window.theme.concat('icon');

// 判断变量是number或者同等string类型
// eslint-disable-next-line
const isNumberString = val => val && (Number(val) == String(val));

// 判断变量是数组或者对象并且是[x,y] || {w:number,h:number}]
const isArrayOrObject = val => {
    if(Array.isArray(val)){
        return isNumberString(val[0]) && isNumberString(val[1])
    }
    else if(val.w && val.h && Object.keys(val).length === 2){
        return isNumberString(val.w) && isNumberString(val.h)
    }
    return false
}
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
        case 'md':
            sizeCls = 'md';
            break;
        case isNumberString(size) && size:
            sizeCls = size;
            break;
        case isArrayOrObject(size) && size:
            let arr = Object.values(size);
            sizeCls = `${arr[0]}-${arr[1]}`;
            break;
        default:
            break;
    }
    return sizeCls;
}

// classes
export const classes = ({ className, type, size = 'md' }, ...others)=> ClassNames(
    prefixCls,
    className,
    {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${sizeCls(size)}`]: sizeCls(size),
    },
    ...others
)