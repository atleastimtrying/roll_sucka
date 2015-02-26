window.dice.Animation = function(){
  var amend_rotation_classes = function(tricks){
    return tricks.replace(/\d/, 't$&');
  };
  var animate = function(event, tricks){
    tricks = amend_rotation_classes(tricks);
    $('.trick_display')[0].className = 'trick_display ' + tricks;

    setTimeout(function(){
      $('.trick_display').addClass('animate');
    }, 200);
  };
  $(dice).on('animate', animate);
};
