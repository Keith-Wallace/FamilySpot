import React from 'react'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
    this.changeName = this.changeName.bind(this)
  }
  changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="nav-logo">
              <a href="#">
                <img src="../../../assets/logo.png" />
              </a>
            </div>
            <div className="nav-account">
              <a href="#">
                <img src="../../../assets/avatar.png" />
                {this.state.name}
              </a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}