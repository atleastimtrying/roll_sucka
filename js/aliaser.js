window.dice.Aliaser = function(){
  var alias = function(event, options){
    options.complete(options.string);
  };
  $(dice).on('alias', alias);
};