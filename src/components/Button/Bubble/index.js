import React,{ useRef } from 'react';
import './index.scss';

const Button = props =>{
    const myButton = useRef(null);
    const showAnimate =()=>{
        myButton.current.classList.add('animate')
        console.log(        myButton.current.classList)
        props.onClick && props.onClick();
        setTimeout(()=>{
            myButton.current.classList.remove('animate');
        },500)
    }
    return(
        <button 
            ref={myButton}
            className="button" 
            onClick={showAnimate}
            {...props}
        >click me</button>
    )
}

export default Button;