import React from 'react';

export default class InvitePerson extends React.Component {
  constructor(props){
    super(props)
    // this.state = {name: 'Guest'}
  }
  render() {
    let guests = this.props.itemData.guests > 1 ? this.props.itemData.guests+ " guests" : this.props.itemData.guests + " guest";
    return (
      <div>
        <div className="invite-headshot">
          <img src={"../../assets/headshots/" + this.props.itemData.headshot} />
          <div>{this.props.itemData.name}</div>
          <span>{guests}</span>
        </div>
      </div>
    )
  }
}