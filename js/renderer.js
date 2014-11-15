window.dice.Renderer = function(){
  var render = function(event, message){
    $('#display').html(message);
    $('#exclude').data('exclude', message);
  };
  $(dice).on('render', render);
};