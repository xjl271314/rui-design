import React from 'react';
import { classes } from '../utils';
import './index.scss';

const Success = props => {
    const {
        onClick = () => { }
    } = props;

    return (
        <div
            className={classes(props, 'icon-success-wrap')}
            onClick={onClick}
        >
            <svg 
                className="icon-success" 
                viewBox="0 0 1756 1024" 
                >
                <path d="M905.528686 82.313143c-220.763429 0-399.729371 178.965943-399.729371 399.729371s178.964114 399.729371 399.729371 399.729371 399.729371-178.965943 399.729371-399.729371S1126.292114 82.313143 905.528686 82.313143zM905.528686 833.8048c-193.962057 0-351.762286-157.800229-351.762286-351.762286s157.7984-351.762286 351.762286-351.762286 351.762286 157.800229 351.762286 351.762286S1099.490743 833.8048 905.528686 833.8048z" p-id="1188"></path><path d="M846.308571 579.527314 704.6016 437.818514 670.687086 471.733029 846.308571 647.356343 1119.1936 374.471314 1085.280914 340.5568Z" ></path></svg>
        </div>
    )
}

export default Success;