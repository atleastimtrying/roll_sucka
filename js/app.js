window.dice.App = function(){
  this.ui = new dice.UI();
  this.renderer = new dice.Renderer();
  this.roller = new dice.Roller();
  this.excluder = new dice.Excluder();
  $('#splash').delay(1000).fadeOut('slow');
};

$(function(){
  window.app = new window.dice.App();
});