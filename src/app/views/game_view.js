import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';

import Game from 'app/models/game';

const GameView = Backbone.view.extend ({
  initialize: function(){
    // template for the new game button
    this.gameButtonTemplate = _.template($('#tmpl-game-button').html());

    // keep track of elements used to render the game button
    this.buttonElement = this.$('#game-button');
    this.boardElement = this.$('#board');


  },
  render: function() {
    // need to make sure an old game is cleared before a new one is rendered:
    this.boardElement.empty();

  },
  // listen for a click on the new game button:
  events: {
    'click .new-game': 'startGame'
  },
  // make the game board modal appear:
  startGame: function(event){
    // have new game modal appear
  },

  // does it make sense to have the make move function that gets triggered by the space click event here?
  makeMove: function(gameModel){
    // make move needs to be called and then how will we tell the space to change to the correct character??
  }

  //
});

export default GameView;
