import React from 'react'
import Activity from './Activities.item'

export default class Activities extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
  }
  render() {
    let keyCounter = 0;
    this.props.activityData.map((singleActivity) =>
      console.log('singleActivity==> ', singleActivity)
    );

    return (
      <article>
      <div className="article-area">
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