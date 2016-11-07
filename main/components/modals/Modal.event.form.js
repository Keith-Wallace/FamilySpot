import React from 'react'

export default class Example extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'eventName': this.props.eventData.eventName,
      'location': this.props.eventData.location,
      'city': this.props.eventData.city,
      'state': this.props.eventData.state,
      'dateStart': this.props.eventData.dateStart,
      'dateEnd': this.props.eventData.dateEnd,
      'details': this.props.eventData.details,
      'byline': this.props.eventData.byline
    }
    this.saveForm = this.saveForm.bind(this)
  }
  componentDidMount() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  saveForm(event) {
    // event.preventDefault();
    // console.log(this.refs)
    this.props.updateEvent(this.refs);
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  render() {
    return (
      <div className="modal-wrapper">
        <button id="myBtn">Edit Info</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Event Info</h3>
              <span className="close">&#10005;</span>
            </div>
            
              <label>Event Name</label>
              <input ref="eventName" defaultValue={this.state.eventName} />

              <label>Location</label>
              <input ref="eventLocation" defaultValue={this.state.location} />

              <div className="form-col-2">
                <div>
                  <label>City</label>
                  <input ref="eventCity" defaultValue={this.state.city} />
                </div>

                <div>
                  <label>State</label>
                  <input ref="eventState" defaultValue={this.state.state} />
                </div>
              </div>

              <label>Date Range</label>
              <input className="input-half" ref="eventDateStart" defaultValue={this.state.dateStart} />
              to
              <input className="input-half input-last" ref="eventDateEnd" defaultValue={this.state.dateEnd} />

              <label>Description</label>
              <textarea ref="eventDescription" defaultValue={this.state.details} />

              <label>Signature</label>
              <input ref="eventByline" defaultValue={this.state.byline} />

              <button onClick={this.saveForm}>Save</button>
              <button className="btn-cancel" onClick={this.closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}