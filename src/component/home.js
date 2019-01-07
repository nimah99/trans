import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header'
class Home extends Component {
    render() {
      return (
          <div>
          <Header/>
        <div className="wrapper-content">
    <section id="transiago-intro" className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={require("../assets/img/transiago.svg")} alt="transiago"/>
        </div>
        <div className="col-md-6 intro">
          <div className="circle"></div>
          <h1>What it’s Transiago</h1>
          <p>Transiago It is a long established fact that a reader will be
          distracted by the readable content of a page
          when looking at its layout.</p>

          {/* <a href="#" className="btn-continue">Continue</a> */}
          <Link to="/" className="btn-continue">Continue</Link>
        </div>
      </div>
    </section>
    <section id="Service">
        <div className="wrapper-service">
          <div className="title-service"><p>Our services</p></div>

          <div className="box-service container">
            <div className="row wrap-bar-service">
              <div className="col-md-6">
                <img src={require("../assets/img/phone.svg")} alt="phone" /> <span className="sh-number-phone">(+62) 831-4865-6290</span>
              </div>
              <div className="col-md-6 service-notify">
                <span>Our Service</span><span className="circle"></span>
              </div>
            </div>

            <div className="row list-service">
              <div className="col-md-4 item-service">
                <div className="wrap-img-service">
                  <img src={require("../assets/img/transiago-anime1.svg")} alt="transiago anime1"/>
                </div>
                <div className="btn-continue-service">
                  {/* <a href="#" className="btn-service">INTERPRETER</a> */}
          <Link to="/" className="btn-service">INTERPRETER</Link>
                </div>
              </div>
              <div className="col-md-4 item-service">
                <div className="wrap-img-service">
                  <img src={require("../assets/img/transiago-anime2.svg")} alt="transiago anime1"/>
                </div>
                <div className="btn-continue-service">
                  {/* <a href="#" className="btn-service">SWORN TRANSLATION</a> */}
          <Link to="/" className="btn-service">SWORN TRANSLATION</Link>
                </div>
              </div>
              <div className="col-md-4 item-service">
                <div className="wrap-img-service">
                  <img src={require("../assets/img/transiago-anime1.svg")} alt="transiago anime1"/>
                </div>
                <div className="btn-continue-service">
                  {/* <a href="#" className="btn-service">INTERPRETER</a> */}
          <Link to="/" className="btn-service">INTERPRETER</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
    <section id="points">
      <div className="title-of-point">
        <p><span>Why!</span> you should choose transiago</p>
      </div>

      <div className="wrap-point container">
        <div className="box image">
          <img src={require("../assets/img/high-quality-translation-transiago.svg")} alt="high quality translation transiago"/>
          <h1>High-Quality</h1>
        </div>
        <div className="box">
          <div className="wrap-greeting">
            <div className="circle">1</div>
            <h1>Quality is number one</h1>
            <p>Transiago It is a long established fact that a reader will be
              distracted by the readable content of a page
              when looking at its layout.</p>
          </div>
        </div>
      </div>
      <div className="wrap-point container reverse">
        <div className="box image">
          <img src={require("../assets/img/security-translation-transiago.svg")} alt="security translation transiago"/>
          <h1>Security</h1>
        </div>
        <div className="box">
          <div className="wrap-greeting">
            <div className="circle">2</div>
            <h1>High-security</h1>
            <p>Transiago It is a long established fact that a reader will be
              distracted by the readable content of a page
              when looking at its layout.</p>
          </div>
        </div>
      </div>
      <div className="wrap-point container">
        <div className="box image">
          <img src={require("../assets/img/fast-translation-transiago.svg")} alt="fast translation transiago"/>
          <h1>Fast</h1>
        </div>
        <div className="box">
          <div className="wrap-greeting">
            <div className="circle">3</div>
            <h1>Faster</h1>
            <p>Transiago It is a long established fact that a reader will be
              distracted by the readable content of a page
              when looking at its layout.</p>
          </div>
        </div>
      </div>
      <div className="wrap-point container reverse">
        <div className="box image">
          <img src={require("../assets/img/accessibility-translation-transiago.svg")} alt="security translation transiago"/>
          <h1>Accessibility</h1>
        </div>
        <div className="box">
          <div className="wrap-greeting">
            <div className="circle">4</div>
            <h1>Accessibility</h1>
            <p>Transiago It is a long established fact that a reader will be
              distracted by the readable content of a page
              when looking at its layout.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="counter">
      <div className="talking">
        <p>TALKING ABOUT NUMBERS</p>
        <h1>We believe in number</h1>
      </div>
      <div className="wrap-counter">
        <div className="box-item">
          <div className="box-cn">
            <div className="bx-itm itm1">
              <div className="count-point-1 count-point">
                <p>1028 P+</p>
              </div>
              <div className="note-p">
                <p>Worth projects using
                  Transiago.com</p>
              </div>
            </div>
            <div className="bx-itm itm1">
              <div className="count-point-2 count-point">
                <p>2028 U+</p>
              </div>
              <div className="note-p">
                <p>People using <br/>
                  trasiago</p>
              </div>
            </div>
          </div>
          <div className="box-cn">
            <div className="bx-itm itm3">
              <div className="count-point-3 count-point">
                <p>1 A+</p>
              </div>
              <div className="note-p">
                <p>Communication is the key to personal success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
      );
    }
  }
  
  export default Home;
