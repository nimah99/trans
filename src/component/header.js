import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
      <header>
    <div className="wrapper-nav">
      <div className="wrap-logo">
      </div>
      <div className="wrap-navmenu">
        <ul className="ul-transiago ul-nav">
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/service" className="link">Service</NavLink></li>
        <li><NavLink to="/faq" className="link">FAQ</NavLink></li>
        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
        </ul>
        <ul className="ul-transiago ul-btn">
        <li className="btn-ls"><NavLink to="/login" className="link">LOG IN</NavLink></li>
        <li className="btn-ls active"><NavLink to="/signup" className="link">SIGN UP</NavLink></li>
        </ul>
      </div>
    </div>

    <div className="wrapper-greeting">
      <div className="wrap-hi" id="hi">
        <img src={require("../assets/img/hi.png")} alt="hi" className="zoomIn animated delay-2s"/>
        <p className="name-transiago lightSpeedIn animated delay-3s">Transiago</p>
        <p className="tagname flipInX animated delay-3s">Build your dream with us and make it better</p>

        <div className="arrow-bottom-btn bounceIn animated delay-3s">
          <i className="fas fa-angle-down "></i>
        </div>
      </div>
    </div>

    <div className="wrap-socicon">
      <ul className="socicon">
        <li><NavLink to="/" className="link"><i className="socicon-whatsapp lightSpeedIn animated delay-1s"></i></NavLink></li>
        <li><NavLink to="/" className="link"><i className="socicon-facebook lightSpeedIn animated delay-2s"></i></NavLink></li>
        <li><NavLink to="/" className="link"><i className="socicon-instagram lightSpeedIn animated delay-3s"></i></NavLink></li>
      </ul>
    </div>
  </header>
      </div>
    );
  }
}

export default Header;
