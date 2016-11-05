import React from 'react';
import InvitePerson from './Invites.person';

export default class InvitesComing extends React.Component {
  constructor(props){
    super(props)
    // this.state = {name: 'Guest'}
  }
  render() {
    let keyCounter = 0;
    return (
      <article>
        <h2>Who's Coming? ({this.props.total})</h2>
        <button>Invite More People</button>
        {
          this.props.rowData.map((item) =>
            <InvitePerson
              key={keyCounter++}
              itemData={item}
            />
          )
        }
      </article>
    )
  }
}