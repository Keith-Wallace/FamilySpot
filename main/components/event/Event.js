import React from 'react'

export default class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Guest',
      pullquote: {
        text: 'Join us for our next family reunion in Colorado. This is going to be a great reunion! We hope you can make it. We\'ve got all sorts of great activities lined up for the whole family, from bonfires to hiking, horseback riding and white water rafting',
        byline: 'Cameron and Jessica'
      }
    }
    // this.changeName = this.changeName.bind(this)
  }
  // changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <article>
        <div className="container event-area">
          <h2>The 2017 Johnson Family Reunion</h2> <button>Edit Info</button>
          <h3>Western Mountain Dude Ranch</h3>
          <span>Durango, Colorado</span>
          <p>July 3 - July 9, 2017</p>
          <aside className="event-pullquote">
            {this.state.pullquote.text}
            <span className="byline">- {this.state.pullquote.byline}</span>
          </aside>
        </div>
      </article>
    )
  }
}