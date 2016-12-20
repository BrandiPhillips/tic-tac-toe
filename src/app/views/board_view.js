import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import GameView from 'app/views/game_view';
import Game from 'app/models/game_model';

const BoardView = Backbone.Model.extend({
  initialize: function() {
    this.template = _.template(Backbone.$('#tmpl-board').html());
  },
  // board view will listen for a click on a space
  events: {
    'click $(.space)': 'spaceHandler'
  },
  // the click space event will trigger a make move function in game view - the function is in the game model... how do I have the click event call the model function?
  spaceHandler: function(event){
    this.trigger('makeMove', this.model);
  }


}); // end of board view

export default BoardView;
