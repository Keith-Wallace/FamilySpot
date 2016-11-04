import React from 'react';
import InvitePerson from './Invites.person';

export default class InvitesNoResponse extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <h2>Invites No Response</h2>
        <InvitePerson />
      </article>
    )
  }
}