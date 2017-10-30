import React from 'react';

import '../../less/heading.less';

export const Heading = (props) =>{
    return(
        <div className="head">
            <h1>Hello Hexal</h1>
            <p className="para">My Name is {props.myname}</p>
        </div>
    );
};