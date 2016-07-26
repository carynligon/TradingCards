import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store';

const CardPage = React.createClass({
  backToList: function() {
    hashHistory.push(`/`);
  },
  render: function() {
    document.getElementById('to-login').style.display = "inline";
    let id = this.props.params.id;
    this.model = store.data[id-1];
    return (
      <div id="wrapper">
        <button onClick={this.backToList} id="goto-card-list">Back</button>
        <main>
          <div className="card-front">
            <img src={this.model.img}/>
          </div>
          <div className="card-back">
            <h3>{this.model.name}</h3>
            <a href={this.model.haters}>Not my biggest fans</a>
            <a href={this.model.twitter}>Twitter</a>
            <p className="sign">My Sign: {this.model.astrology}</p>
            <p>{this.model.quote}</p>
            <p className="points">{this.model.value}</p>
          </div>
        </main>
      </div>
    );
  }
});

export default CardPage;
