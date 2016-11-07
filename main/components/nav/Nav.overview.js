import React from 'react';

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <nav className="overview-nav">
        <div className="container overview-nav-area">
          <ul>
            <li id="nav-li-attendees">
              Attendees
              <img src="../../../assets/icon-triangle-down-white.svg" />
            </li>
            <li id="nav-li-activities">
              Activities ({this.props.activityCount})
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}