import React from 'react';
import InvitesComing from './invites/Invites.coming';
import InvitesNotComing from './invites/Invites.notComing';
import InvitesNoResponse from './invites/Invites.noResponse';
import Activities from './activities/Activities.panel';

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    // this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <div className="container overview-area">
          <div className="invites">
            <InvitesComing />
            <InvitesNotComing />
            <InvitesNoResponse />
          </div>
          <div className="activities">
            <Activities activityData={this.props.activityData} />
          </div>
        </div>
      </article>
    )
  }
}