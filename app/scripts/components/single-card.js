import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store';

const Card = React.createClass({
  gotoCardPage: function() {
    hashHistory.push(`/` + this.props.item.id);
  },
  render: function() {
    return (
      <li id={this.props.item.id} onClick={this.gotoCardPage}>
        <img src={this.props.item.img}/>
        <h3>{this.props.item.name}</h3>
      </li>
    );
  }
});

export default Card;
