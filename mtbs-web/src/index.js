import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import TandaBahayaUmum from './View/TandaBahayaUmum/tbu'
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<TandaBahayaUmum />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
