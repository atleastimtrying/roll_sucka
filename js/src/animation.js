window.dice.Animation = function(){
  var animate = function(event, tricks){
    tricks = tricks.replace('1', 't1').replace('2', 't2').replace('3', 't3');
    $('.trick_display')[0].className = 'trick_display ' + tricks;

    setTimeout(function(){
      $('.trick_display').addClass('animate');
    }, 200);
  };
  $(dice).on('animate', animate);
};
