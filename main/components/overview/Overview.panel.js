import React from 'react';
import InvitesComing from './invites/Invites.coming';
import InvitesNotComing from './invites/Invites.notComing';
import InvitesNoResponse from './invites/Invites.noResponse';
import Activities from './activities/Activities.panel';

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      "coming": [],
      "notComing": [],
      "noResponse": []
    }
    // this.state = {name: 'Guest'}
  }
  componentWillMount() {
    // console.log('===> ', this.props.invitesData.)
    this.props.invitesData.map((item) => {
      if(item.status.coming) {
        this.state.coming.push(item);
      } else if(item.status.notComing) {
        this.state.notComing.push(item);
      } else {
        this.state.noResponse.push(item);
      }
    });
  }

  render() {
    console.log(this.props.activityData)
    return (
      <article>
        <div className="container overview-area">
          <div className="invites show-tab" id="nav-attendees">
            <InvitesComing
              rowData={this.state.coming}
              total={this.state.coming.length}
            />
            <InvitesNotComing
              rowData={this.state.notComing}
              total={this.state.notComing.length}
            />
            <InvitesNoResponse
              rowData={this.state.noResponse}
              total={this.state.noResponse.length}
            />
          </div>
          <div className="activities" id="nav-activities">
            <Activities activityData={this.props.activityData} />
          </div>
        </div>
      </article>
    )
  }
}