import React from 'react';
// import toggleOverviewNav from '../../lib/toggleOverviewNav'

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  toggleOverviewNav(event) {
    let Attendees = document.getElementById('nav-attendees');
    let Activities = document.getElementById('nav-activities');
    let AttendeesLI = document.getElementById('nav-li-attendees');
    let ActivitiesLI = document.getElementById('nav-li-activities');

    if((event.currentTarget.id === 'nav-li-attendees') && (!Attendees.classList.contains('show-tab'))) {
      Attendees.classList.add('show-tab');
      AttendeesLI.classList.add('icon-tri-down');
      Activities.classList.remove('show-tab');
      ActivitiesLI.classList.remove('icon-tri-down');
    } else if((event.currentTarget.id === 'nav-li-activities') && (!Activities.classList.contains('show-tab'))) {
      Activities.classList.add('show-tab');
      ActivitiesLI.classList.add('icon-tri-down');
      Attendees.classList.remove('show-tab');
      AttendeesLI.classList.remove('icon-tri-down');
    }
  }

  render() {
    return (
      <nav className="overview-nav">
        <div className="container overview-nav-area">
          <ul>
            <li id="nav-li-attendees" className="icon-tri-down" onClick={this.toggleOverviewNav}>
              Attendees
            </li>
            <li id="nav-li-activities" onClick={this.toggleOverviewNav}>
              Activities ({this.props.activityCount})
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}