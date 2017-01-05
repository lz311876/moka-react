import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory } from 'react-router'
import App from './components/App';
import Example from './containers/Example';
//import './styles/index.scss';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Example} />
    </Router>
), document.getElementById('app'));