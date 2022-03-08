import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import List from './ComponentList';
import Image from './ComponentImage';
import Test from './LifecycleComponent';
import HelloComponent from "./HelloComponent";
import Login from './Login';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Stateless Component helloComponent()
// function HelloComponent(){
//   return <p>Ini adalah fungsi HelloComponent() (Stateless Component)</p>;
//   //return HelloComponent
// }
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

//Statefull component  
// const HelloComponent = () => {
//   return HelloComponent
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>Ini adalah kelas StateFullComponent (Statefull Component)</p>;
//   }
// }
// ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));

// ReactDOM.render(<Footer judul='Ini adalah halaman footer' nama= 'Darman'/>, document.getElementById('root'));

// ReactDOM.render(<List/>, document.getElementById('root'));

// ReactDOM.render(<Test/>, document.getElementById('root'));

 ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
