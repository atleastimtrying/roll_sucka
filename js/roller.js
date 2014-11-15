window.dice.Roller = function(){
  var decided = function(){
    return (Math.random() > 0.5);
  };
  
  var remove_stupid = function(item){
    return !item.stupid;
  };

  var remove_switch = function(item){
    return !(item.name === "switch");
  };

  var filter = function(arr){
    if(!dice.config.stupid_tricks_enabled){
      arr = _.filter(arr, remove_stupid);
    }
    if(!dice.config.switch_tricks_enabled){
      arr = _.filter(arr, remove_switch);
    }
    if(arr.length > 0){
      return arr;
    }
  };

  var pluck = function(name){
    var arr = dice.tricks[name];
    if(arr.length > 0){
      arr = filter(arr);
      var candidate = arr[Math.floor(Math.random() * arr.length)];
      return candidate.name;
    }
  };

  var alias = function(response){
    return response;
  };

  var bug_imminent = function(label){
    //if switch is turned off the h_block array will be empty
    return(label == "h_block" && !dice.config.switch_tricks_enabled);
  };

  var ramp_spin = function(label){
    var angle = Math.ceil(Math.random() * 3) * 180;
    if(label === "h_block"){
      return angle;
    }else{
      return angle - 90;
    }
  };

  var ledge_spin = function(label){
    var angle = Math.ceil(Math.random() * 3) * 180;
    if(label === "h_block"){
      return angle + 90;
    }else{
      return angle;
    }
  };

  var get_labelled_trick = function(label){
    var response = [];
    if(dice.config.spins_enabled){
      if(dice.config.ramp_mode_enabled){
        response.push(ramp_spin(label));
      }else{
        response.push(ledge_spin(label));
      }
    }
    var necessary_string = pluck("necessary_" + label + "_variants");
    if(necessary_string){
      response.push(necessary_string);
    }
    if(decided() && !bug_imminent(label)){
      response.push(pluck("optional_" + label + "_variants"));
    }
    response.push(pluck(label + "_based"));
    var spaced = response.join(" ");
    return alias(spaced);
  };

  var get_trick = function(){
    var label = "h_block";
    if(decided()){
      label = "soul";
    }
    return get_labelled_trick(label);
  };

  var roll = function(){
    var trick = get_trick();
    $(dice).trigger('check_exclusion', {
      name: trick,
      complete:function(is_excluded){
        if(is_excluded){
          roll();
        }else{
          $(dice).trigger('render', trick);
        }
      }
    });
  };

  $(dice).on('roll', roll);
};