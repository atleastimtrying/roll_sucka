window.dice.App = function(){
  this.ui = new dice.UI();
  this.renderer = new dice.Renderer();
  this.roller = new dice.Roller();
  this.excluder = new dice.Excluder();
  this.animation = new dice.Animation();
  this.boot_appender = new dice.BootAppender();
  $('#splash').delay(1000).fadeOut('slow');
};

$(function(){
  window.app = new window.dice.App();
});
