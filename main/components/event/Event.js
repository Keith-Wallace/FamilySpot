import React from 'react'
import FormModal from '../modals/Modal.event.form';
// import Modal from 'boron/DropModal';

export default class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'eventName': this.props.data[0].eventName,
      'location': this.props.data[0].location,
      'city': this.props.data[0].city,
      'state': this.props.data[0].state,
      'dateStart': this.props.data[0].dateStart,
      'dateEnd': this.props.data[0].dateEnd,
      'details': this.props.data[0].details,
      'byline': this.props.data[0].byline
    }
    // this.changeName = this.changeName.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
  }

  updateEvent(data) {
    // console.log('=====> ', data.eventName.value)

    this.setState({
        'eventName': data.eventName.value,
        'location': data.eventLocation.value,
        'city': data.eventCity.value,
        'state': data.eventState.value,
        'dateStart': data.eventDateStart.value,
        'dateEnd': data.eventDateEnd.value,
        'details': data.eventDescription.value,
        'byline': data.eventByline.value
      })
  }


  // changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    // console.log('EVENT DATA: ', this.props)
    return (
      <article>
        <div className="container event-area">
          <h2>{this.state.eventName}</h2>
          <FormModal
            eventData={this.props.data[0]}
            updateEvent={this.updateEvent}
          />
          <h3>{this.state.location}</h3>
          <span>{this.state.city}, {this.state.state}</span>
          <p>{this.state.dateStart} - {this.state.dateEnd}</p>
          <aside className="event-pullquote">
            {this.state.details}
            <span className="byline">- {this.state.byline}</span>
          </aside>
        </div>
      </article>
    )
  }
}