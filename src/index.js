import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/stylesheets/index.css';
import flux from './flux';

ReactDOM.render(
    <App flux={flux}/>,
    document.getElementById('root')
);
