import React from 'react'
// import Modal from 'boron/DropModal';

export default class Example extends React.Component {
  showModal() {
    this.refs.modal.show();
  }

  hideModal() {
    this.refs.modal.hide();
  }

  callback(event) {
    console.log(event);
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

  render() {

    return (
      <div>
        <button id="myBtn">Open Modal</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close">×</span>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}