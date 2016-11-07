import React from 'react'
import Activity from './Activities.item'

export default class Activities extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    let keyCounter = 0;
    return (
      <article>
        <div className="activity-area">
          <h2>Activities</h2>
          <button>Add</button>
          {
            this.props.activityData.map((singleActivity) =>
              <Activity
                key={keyCounter++}
                dataRow={singleActivity}
              />
            )
          }
        </div>
      </article>
    )
  }
}