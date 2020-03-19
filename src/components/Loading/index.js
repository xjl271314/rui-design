import React from 'react';
import Circle from './Circle';


const Loading = props=>{
    const types = {
        'default':<Circle {...props}/>,
        'circle':<Circle {...props}/>
    }
    return(
        types[props.type] || types['default']
    )
}
export default Loading
