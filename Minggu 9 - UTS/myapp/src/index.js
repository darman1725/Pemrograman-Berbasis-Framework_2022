import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <App />
    </BrowserRouter>
,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BrowserRouter><App /></BrowserRouter>)

