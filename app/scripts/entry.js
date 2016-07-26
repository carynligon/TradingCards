import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Cards from './collections/cardsCollection';
import store from './store';
import AppRouter from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

ReactDOM.render(AppRouter, document.getElementById('container'));
