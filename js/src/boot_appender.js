window.dice.BootAppender = function(){
  $('.feet .left, .feet .right').each(function(index, foot){
    console.log(foot);
    $(foot).load('images/boot.svg');
  });
};
