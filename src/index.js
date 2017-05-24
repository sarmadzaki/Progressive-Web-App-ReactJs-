import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Edit from './components/addItem';
import Details from './components/ItemsDetails'
import { Router, browserHistory, Route } from 'react-router';
import Data from './components/data'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/Edit" component={Edit} />
        <Route path="/Details/:name" component={Details} Data={Data} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
