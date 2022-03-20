import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ParamsExample from './Params';
import NestingExample from './Nesting';
import AuthExample from './Auth';

//ReactDOM.render(<App/>, document.getElementById('root')

//ReactDOM.render(<ParamsExample/>, document.getElementById('root')

//ReactDOM.render(<NestingExample/>, document.getElementById('root')

ReactDOM.render(<AuthExample/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
