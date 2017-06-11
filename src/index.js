import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Routes/Landing/Landing.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Container from './Routes/Container/Container.jsx'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router history={browserHistory}>
        <Route path='/' component={ Container }>
          <IndexRoute component={Landing} />
          <Route path='movewatch' token={'userID'} component={Dashboard} />
          <Route path='Landing' component={Landing} />
        </Route>
      </Router>, document.querySelector('#root-container'));

