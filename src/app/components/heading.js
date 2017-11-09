import React from 'react';
import '../../less/heading.less';
export const Heading = (props) =>{
    return(
        <div className="container">
            <div className="jumbotron">
                <h1 className="text-center head">{props.dc}</h1>
            </div>
        </div>
    );
};