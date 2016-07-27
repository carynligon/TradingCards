import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store';
import Card from './single-card';

const CardList = React.createClass({
  render: function() {
    document.getElementById('to-login').style.display = "inline";
    let listArr = [];
    store.cards.fetch({success: (response) => {
      console.log(response);
      listArr = response.map((card, i) => {
        console.log(card.attributes);
        return <Card item={card.attributes} key={i}/>;
      });
      console.log(listArr);
    }});
    return (
      <ul className="card-list">
        {listArr}
      </ul>
    );
  }
});

export default CardList;
