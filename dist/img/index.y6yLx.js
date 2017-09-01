import React from 'react';
import { render} from 'react-dom';
import { HashRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import { IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './Routes/App.jsx'





render((
   <BrowserRouter history={browserHistory}>
   <App />
   </BrowserRouter >
), document.getElementById('root-container'));
