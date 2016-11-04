import React from 'react';
import InvitePerson from './Invites.person';

export default class InvitesComing extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <h2>Invites Coming</h2>
        <button>Invite More People</button>
        <InvitePerson />
      </article>
    )
  }
}