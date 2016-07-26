import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store';
import Card from './single-card';

const CardList = React.createClass({

  render: function() {
    document.getElementById('to-login').style.display = "inline";
    let listArr = store.data.map((card, i) => {
      return <Card item={card} key={i}/>;
    });
    return (
      <ul className="card-list">
        {listArr}
      </ul>
    );
  }
});

export default CardList;
