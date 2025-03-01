import React from 'react';
import Nav from '../nav/Nav.main';
import Event from '../event/Event';
import NavOverview from '../nav/Nav.overview';
import Overview from '../overview/Overview.panel';

export default class Home extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {name: 'Guest'}
  //   this.changeName = this.changeName.bind(this)
  // }
  // changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <div>
        <Nav />
        <div className="">
          <Event
            data={this.props.routes[0].data.event}
          />
          <NavOverview
            activityCount={this.props.routes[0].data.activity.length}
          />
          <Overview
            invitesData={this.props.routes[0].data.invite}
            activityData={this.props.routes[0].data.activity}
          />
        </div>
      </div>
    )
  }
}