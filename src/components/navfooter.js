
import React, { Component } from 'react';
import { Link } from 'react-router';

class NavFooter extends Component {
  render() {
    return (
      <div>

      <div className="wow fadeIn">
  <section className="section-primary">
    <div className="container">
      <div className="row">
      <div className="col-md-3">
        <h2 className="page-header">My Account</h2>
        <ul className="feature-list">
        <li>
        <i className="fa fa-sign-in" aria-hidden="true">
        <Link to="/signin"> Sign in</Link></i></li>
        <li>
        <i className="fa fa-sign-in" aria-hidden="true">
        <Link to="/signup"> Sign up</Link></i></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h2 className="page-header">About</h2>
        <ul className="feature-list">
        <li><Link to="about_us">About</Link></li>
        <li><Link to="contact">Contact Us</Link></li>
        <li><Link to="faq">FAQ</Link></li>
        </ul>
      </div>
        <div className="col-md-3">
          <h2 className="page-header">Customer Service</h2>
          <ul className="feature-list">
          <li>Return & Exchange</li>
          <li>Shipping</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2 className="page-header">Stay connected</h2>
          <ul className="feature-list">
            <li><i className="fa fa-facebook" aria-hidden="true" ><a href="https://www.facebook.com/Laitanos"> Facebook</a></i></li>
          </ul>
        </div>
      </div>
    </div>
    <p>Copyright &copy; Laitanos 2017</p>

  </section>

</div>

</div>

    );
  }
}

export default NavFooter;
