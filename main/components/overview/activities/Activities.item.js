import React from 'react';

export default class Activity extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    return (
      <article>
        <div>[x]</div>
        <h3>Activity Name</h3>
        <div>July 4 at 9:00am</div>
        <p>Saddle up and take part in an enjoyable family adventure. We offer trail rides for all levels of riders - beginner, intermediate, advanced.</p>
      </article>
    )
  }
}