import React from 'react';
import ReactDOM from 'react-dom';

import {Heading} from './components/heading.js';
class AppComponents extends React.Component{
    render(){
        return(
            <Heading />
        );
    }
}
ReactDOM.render(<AppComponents />,document.getElementById('app'));