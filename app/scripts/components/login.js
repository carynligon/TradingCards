import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import session from '../models/Session';

const Login = React.createClass({
  submitFunction: function(e) {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    e.preventDefault();
    session.save({
        username: username,
        password: password
    }, {
        success: function(model, response) {
            window.localStorage.setItem('authtoken', response._kmd.authtoken);
            model.unset('password');
            console.log(model);
            hashHistory.push('/');
        },
        error: function() {
            console.log('error, not logged in');
        }
      });
    },
  render: function() {
    document.getElementById('to-login').style.display = "none";
    return (
      <form onSubmit={this.submitFunction} className="login-form">
        <h4>Login</h4>
        <input type="text" placeholder="username" ref="username"/>
        <input type="password" placeholder="password" ref="password"/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});

export default Login;
