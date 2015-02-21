window.dice.Excluder = function(){
  var get_excluded = function(){
    return JSON.parse(localStorage.getItem('excluded'));
  };
  
  var set_excluded = function(excluded){
    localStorage.setItem('excluded', JSON.stringify(excluded));
  };

  var fetch_excluded = function(event, return_excluded){
    var excluded = get_excluded();
    return_excluded(excluded);
  };
  
  var exclude = function(event, trick_to_exclude){
    var excluded = get_excluded();
    excluded.push(trick_to_exclude);
    set_excluded(excluded);
  };

  var check_exclusion = function(event, options){
    options.complete(_.contains(get_excluded(), options.name));
  };

  var clear_excluded = function(){
    set_excluded([]);
  };
  
  if(!get_excluded()){
    set_excluded([]);
  }
  $(dice).on('fetch_excluded', fetch_excluded);
  $(dice).on('exclude', exclude);
  $(dice).on('check_exclusion', check_exclusion);
  $(dice).on('clear_excluded', clear_excluded);
};