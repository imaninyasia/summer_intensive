import React from 'react';
import { render} from 'react-dom';
import { HashRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import { IndexRoute, browserHistory, hashHistory } from 'react-router';
import Container from './Routes/Container/Container.jsx';
import Dashboard from './Routes/Dashboard/Dashboard.jsx';
import Interactive_Zone from './Routes/Interactive_Zone/Interactive_Zone.jsx'
import Landing from './Routes/Landing/Landing.jsx'
import Whoops from './Components/404/Whoops404.jsx'
render((
   <BrowserRouter history={browserHistory}>
   <div>
      <Route exact path="/" component={Landing} value={2}/>
      <Route path="/dashboard"  component={Dashboard} />
      <Route path="/courses" component={Interactive_Zone} />
      <Route path="*" component={Whoops} />
      </div>
   </BrowserRouter >
), document.getElementById('root-container'));
