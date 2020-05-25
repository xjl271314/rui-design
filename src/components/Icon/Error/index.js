import React from 'react';
import { classes } from '../utils';
import './index.scss';

const Error = props => {
    const {
        onClick = () => { },
    } = props;

    return (
        <div
            className={classes(props, 'icon-error-wrap')}
            onClick={onClick}
        >
            <svg className="icon-error" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="circle" cx="26" cy="26" r="25" fill="none" />
                <path className="line" fill="none" d="M17.36,34.736l17.368-17.472" />
                <path className="line" fill="none" d="M34.78,34.684L17.309,17.316" />
            </svg>
        </div>
    )
}

export default Error;