import React, { Component } from 'react';
import 'login/styles/login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      requested: false,
    };
  }
  login = (e) => {
    e.preventDefault();
    console.log('Submit');
  }
  render() {
    return (
      <div className="container login">
        <div className="row full-page justify-content-center">
          <div className="col-6 align-self-center">
            <form onSubmit={(e) => this.login(e)}>
              <div className="form-group row">
                <div className="col-12">
                  <input type="text" id="username" className="input-text-zork" placeholder="username" />
                </div>
                <div className="col-12 pt">
                  <input type="password" id="password" className="input-text-zork" placeholder="password" />
                </div>
                <div className="col-12 pt">
                  <button type="submit" className="btn btn-primary btn-zork w1">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


