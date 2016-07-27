import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store';

const Card = React.createClass({
  gotoCardPage: function() {
    hashHistory.push(`/` + this.props.item.id);
  },
  render: function() {
    console.log(this);
    return (
      <li id={this.get('_id')} onClick={this.gotoCardPage}>
        <img src={this.get('img')}/>
        <h3>{this.get('name')}</h3>
      </li>
    );
  }
});

export default Card;
