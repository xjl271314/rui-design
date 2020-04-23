import React from 'react';
import { classes } from './utils';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import './index.scss';

const Card = props => {
    const {
        className,
        ...rest
    } = props;

    return(
        <div className={classes(props)} {...rest} />
    )
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
