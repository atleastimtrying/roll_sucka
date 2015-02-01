Array.prototype.pluck = function(){
  return this[Math.floor(Math.random()*this.length)];
};
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

window.dice.Roller = function(){
  var get_starting_position = function(){
    return ["", "fakie"].pluck();
  };

  var get_circular_motion = function(){
    return ["", "truespin"].pluck();
  };

  var get_rotation = function(){
    return [0, 90, 180, 270, 360].pluck();
  };

  var get_direction = function(starting_position, circular_motion, rotation){
    if(starting_position === "fakie"){
      if(rotation === 0 || rotation === 360){
        return "alleyoop";
      }

      if(rotation === 180){
        return "";
      }

      if(circular_motion === "truespin" && rotation === 90 || circular_motion !== "truespin" && rotation === 270){
        return "fs";
      }

      if(circular_motion !== "truespin" && rotation === 90 || circular_motion === "truespin" && rotation === 270){
        return "bs";
      }
    }else{
      if(rotation === 0 || rotation === 360){
        return "";
      }

      if(rotation === 180){
        return "alleyoop";
      };

      if(circular_motion === "truespin" && rotation === 90 || circular_motion !== "truespin" && rotation === 270){
        return "bs";
      }

      if(circular_motion !== "truespin" && rotation === 90 || circular_motion === "truespin" && rotation === 270){
        return "fs";
      }
    }
  };

  var get_trick = function(direction){
    if(direction === "fs" || direction === "bs"){
      return ["royale", "farv", "unity", "ufo", "backslide", "torque slide", "pudd slide", "fast slide"].pluck();
    }else{
      return ["soul", "acid soul", "makio", "misou", "sunnyday", "x-grind", "fishbrain", "topsoul", "topacid", "topsunny", "sweatstance"].pluck();
    }
  };

  var tidy_names = function(name){
    return name && name !== "" && name !== 0 && name !== 90;
  };

  var generate_trick = function(){
    var starting_position = get_starting_position();
    var circular_motion = get_circular_motion();
    var rotation = get_rotation();
    var direction = get_direction(starting_position, circular_motion, rotation);
    var trick = get_trick(direction);
    if(rotation <= 90){
      circular_motion = "";
    }
    return [starting_position, rotation, circular_motion, direction, trick].filter(tidy_names).join(" ");
  };

  var alias = function(trick){
    var new_trick = trick;
    return new_trick;
  };

  var roll = function(){
    var trick = generate_trick();
    $(dice).trigger('render', alias(trick));
  };

  $(dice).on('roll', roll);
};
