import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";
import Logo from "../components/logo";
import Footer from "../components/Footer"
import "./login.css"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.googleSignIn = this.googleSignIn.bind(this);
    // this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // async googleSignIn() {
  //   try {
  //     await signInWithGoogle();
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   }
  // }

  // async githubSignIn() {
  //   try {
  //     await signInWithGitHub();
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   }
  // }

  render() {
    return (
      <div className="container">
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <Logo />

          <div className="row">

            <div className="col s12">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col s12">

              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col s12">
              <div className="form-group">
                {this.state.error ? (
                  <p className="error-text">{this.state.error}</p>
                ) : null}
                <div className="buttoncontainer">

                  <button className="transparent btn waves-effect waves-light" type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>

        </form>

        <p><small>&copy; Sadovszky &amp; Sims 2020</small></p>

        {/* Get rid of footer component before build */}
        <Footer />

      </div >
    );
  }
}
