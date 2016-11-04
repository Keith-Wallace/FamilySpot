import React from 'react'

export default class InvitesNotComing extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <h2>Invites Not Coming</h2>
      </article>
    )
  }
}