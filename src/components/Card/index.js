import React from 'react';
import { classes } from './utils';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import './index.scss';
import { Button } from 'antd-mobile';


const Card = props => {
    const {
        className,
        ...rest
    } = props;

    return(
        <div className={classes(props)} {...rest} >
            <CardHeader 
                thumbClassName=""
                thumb="https://cdn.weipaitang.com/static/2020033124a1fbda-a6f6-fbdaa6f6-4c05-ef0e824493ff-W200H200"
                extra={<Button type="primary">关注</Button>}
            />
            <CardBody >
                我是body
            </CardBody>
            <CardFooter content="我是footer" />
        </div>
    )
}
export default Card;
