import React from 'react'

export default class Event extends React.Component {
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
          EVENT
        </div>
      </article>
    )
  }
}