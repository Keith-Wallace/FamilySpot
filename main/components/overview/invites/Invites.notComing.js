import React from 'react';
import InvitePerson from './Invites.person';

export default class InvitesNotComing extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    let keyCounter = 0;
    return (
      <article>
        <div>
          <h2>Not Coming ({this.props.total})</h2>
        </div>

        <ul className="inviteList">
          {
            this.props.rowData.map((item) =>
              <InvitePerson
                key={keyCounter++}
                itemData={item}
                showGuests="N"
              />
            )
          }
          </ul>
      </article>
    )
  }
}