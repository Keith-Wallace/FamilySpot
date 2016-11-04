import React from 'react'
import InvitesComing from './Invites.coming'

export default class Invites extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
    this.changeName = this.changeName.bind(this)
  }
  changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <article>
        <div className="container">
          <InvitesComing />
        </div>
      </article>
    )
  }
}