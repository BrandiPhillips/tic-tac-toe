import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  this.board = [0,0,0,0,0,0,0,0,0];
  this.playerOne = 'Player One'; //X & 1
  this.playerTwo = 'Player Two'; //O & -1
  this.totalMoves = 0;
})
