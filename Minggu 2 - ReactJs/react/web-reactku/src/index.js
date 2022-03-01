import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = () =>{
    return <p>Hello</p>
}

// ReactDOM.render(<App />, document.getElementById('root'));

   ReactDOM.render(<Hello />, document.getElementById('root'));

// ReactDOM.render(<p> Hello Word/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
