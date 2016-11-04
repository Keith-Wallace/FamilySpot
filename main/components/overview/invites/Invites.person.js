import React from 'react';

export default class InvitePerson extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>


        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
        <div className="invite-headshot">
          <img src="../../assets/headshots/headshot-placeholder.png" />
          <div>First L.</div>
          <span>+3 guests</span>
        </div>
      </div>
    )
  }
}