import React from 'react';
import IconGear from './Icon.gear';

export default class Activity extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      "name": this.props.dataRow.name,
      "event": {
        "date": this.props.dataRow.event.date,
        "time": this.props.dataRow.event.time
      },
      "description": this.props.dataRow.description
    }
  }
  render() {
    return (
      <article>
        <div className="activity-detail">
          <div className="activity-settings">
            <IconGear /> <img src="../../../assets/icon-triangle-down-light-grey.svg" />
          </div>
          <h3>{this.state.name}</h3>
          <div className="activity-date">{this.state.event.date} at {this.state.event.time}</div>
          <p>{this.state.description}</p>
        </div>
      </article>
    )
  }
}