import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Cards from './collections/cardsCollection';
import store from './store';
import settings from './settings';
import AppRouter from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

// localStorage.authtoken = 1234;
// store.cards.fetch({success:function(response) {
//   console.log(response);
// }});


ReactDOM.render(AppRouter, document.getElementById('container'));
