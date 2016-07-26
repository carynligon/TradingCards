import Backbone from 'backbone';

import settings from '../settings';

import Card from '../models/cardModel';

const Cards = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/Cards`,
  model: Card
});

export default Cards;
