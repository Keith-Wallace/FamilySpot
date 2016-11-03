import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/home/Home.template';
import Nav from '../components/nav/Nav.main';

const routes = (
  <Router history={hashHistory}>
    <Route path='/'component={Home} />
    <Route path='/'component={Nav} />
    <Route path='/'component={Event} />
  </Router>
)

export default routes


// import React from 'react'
// import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import Home from '../components/home/Home.react'

// const routes = (
//   <Router history={hashHistory}>
//     <Route path='/'component={Home} />
//   </Router>
// )

// export default routes
