import React from 'react'

export default class InvitesComing extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
    this.changeName = this.changeName.bind(this)
  }
  changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <article>
        <h2>InvitesComing</h2>
      </article>
    )
  }
}