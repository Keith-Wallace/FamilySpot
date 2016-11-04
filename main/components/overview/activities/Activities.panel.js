import React from 'react'
import Activity from './Activities.item'

export default class Activities extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <h2>Activities</h2>
        <button>Add</button>
        <Activity />
      </article>
    )
  }
}