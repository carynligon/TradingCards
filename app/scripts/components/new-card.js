import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import store from '../store';

const NewCard = React.createClass({
  sendCard: function() {
    let newObj = {
      id: store.data.length + 1,
      name: this.refs.name.value,
      haters: this.refs.link.value,
      twitter: 'https://twitter.com/' + this.refs.twitter.value,
      astrology: this.refs.astrology.value,
      quote: this.refs.quote.value,
      img: this.refs.img.value
    }
    store.data.push(newObj);
    console.log(store.data);
    hashHistory.push(`/`);
  },
  render: function() {
    return (
      <form className="new-card-form" onSubmit={this.sendCard}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="Informational Link" ref="link"/>
        <input type="text" placeholder="Twitter Username" ref="twitter"/>
        <input type="text" placeholder="Astrology Sign" ref="astrology"/>
        <input type="text" placeholder="Quote" ref="quote"/>
        <input type="text" placeholder="Image Link" ref="img"/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

export default NewCard;
