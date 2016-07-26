import Backbone from 'backbone';

import settings from '../settings';

const Card = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/Cards`,
});

export default Card;
