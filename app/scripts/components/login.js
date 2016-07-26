import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const Login = React.createClass({
  submitFunction: function(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      username: username,
      password: password
    }
    hashHistory.push('/');
    console.log(data);
  },
  render: function() {
    document.getElementById('to-login').style.display = "none";
    return (
      <form onSubmit={this.submitFunction}>
        <input type="text" placeholder="username" ref="username"/>
        <input type="text" placeholder="password" ref="password"/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});

export default Login;
