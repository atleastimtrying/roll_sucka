window.dice.UI = function(){
  $('#roll').click(function(){
    $(dice).trigger('roll');
  });
  $('#switch').change(function(event){
    dice.config.switch_tricks_enabled = $(event.currentTarget).is(':checked');
  });
  $('#stupid').change(function(event){
    dice.config.stupid_tricks_enabled = $(event.currentTarget).is(':checked');
  });
  $('#ramp_mode').change(function(event){
    dice.config.ramp_mode_enabled = $(event.currentTarget).is(':checked');
  });
  $('#spins').change(function(event){
    dice.config.spins_enabled = $(event.currentTarget).is(':checked');
  });
  $('#exclude').click(function(event){
    $(dice).trigger('exclude', $(event.currentTarget).data('exclude'));
  });
  $('#clear_excluded').click(function(){
    $(dice).trigger('clear_excluded');
  });
};