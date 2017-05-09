import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
            <div className="container Contact">
              <div className="row ">
                <div className="col-md-6">

                    <h1>Contact Us</h1>
                    <p><strong>Email:</strong> laitanoscr@gmail.com.</p>
                    <p>Costa Rica, Heredia.</p>
                    <p><a href="https://www.facebook.com/Laitanos"> www.facebook.com/Laitanos</a></p>
                    <img  src="../img/items/aretes/8.jpg" />

                </div>
                <div className="col-md-6 Message">
                  <form>
                  <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Write your name" />
                  </div>
                  <div className="form-group">
                  <label>Write your Email</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="write your email" />
                  </div>
                  <div className="form-group">
                  <label>write your Message</label>
                  <textarea className="form-control" placeholder="Message">
                  </textarea>
                  </div>
                  </form>
                </div>
              </div>
            </div>


    </div>

    );
  }
}

export default Contact;
