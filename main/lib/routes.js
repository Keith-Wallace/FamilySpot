import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/home/Home.template';
import Nav from '../components/nav/Nav.main';

import eventData from '../../data/event.data.json';
import inviteData from '../../data/invites.data.json';
import activityData from '../../data/activities.data.json';

let data = {
  event: eventData,
  invite: inviteData,
  activity: activityData
}

const routes = (
  <Router history={hashHistory}>
    <Route path='/' data={data} component={Home} />
    {/*<Route path='/'component={Nav} />
    <Route path='/'component={Event} />*/}
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
