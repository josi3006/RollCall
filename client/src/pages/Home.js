import React, { Component } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Logo from "../components/logo";
import { Link } from 'react-router-dom';
import "./home.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col s12 center-align">
            <Logo />
            {/* <Header></Header> */}
            <section>
              <div>
                <div className="buttoncontainer">
                  <div>
                    <Link className="transparent btn center-align waves-effect waves-light" to="/login">Login to Your Account</Link>
                  </div>
                </div>
              </div>
            </section>
            <p><small>&copy; Sadovszky &amp; Sims 2020</small></p>
          </div>
        </div>
      </div>
      
    )

  
  }
}
