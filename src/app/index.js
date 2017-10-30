import React from 'react';
import ReactDOM from 'react-dom';

import {Heading} from './components/heading.js';

import '../css/page.css';

class AppComponents extends React.Component{
    render(){
        return(
            <Heading myname="Dipanshu" />
        );
    }
}
ReactDOM.render(<AppComponents />,document.getElementById('app'));