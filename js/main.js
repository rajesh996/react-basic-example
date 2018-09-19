import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    render(){
        return <h1>Hello React, I'm here for you!</h1>;
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

