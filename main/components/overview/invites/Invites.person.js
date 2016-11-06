import React from 'react';

export default class InvitePerson extends React.Component {
  constructor(props){
    super(props)
    // this.state = {name: 'Guest'}
  }
  render() {
    let guests = '';
    if(this.props.showGuests === 'Y') {
      guests = this.props.itemData.guests > 1 ? this.props.itemData.guests+ " guests" : this.props.itemData.guests + " guest";
    }
    return (
      <li>
        <div className="INVITE-BOX">
          <div className="INVITE-HEADSHOT">
            <img src={"../../assets/headshots/" + this.props.itemData.headshot} />
          </div>
          <div className="INVITE-CAPTION">
            <span>{this.props.itemData.name}</span>
            <span>{guests}</span>
          </div>
        </div>
      {/*<div className="invite-box flex-item">
        <div className="invite-headshot">
          <img src={"../../assets/headshots/" + this.props.itemData.headshot} />
          <div>{this.props.itemData.name}</div>
          <span>{guests}</span>
        </div>
      </div>*/}
      </li>




    )
  }
}