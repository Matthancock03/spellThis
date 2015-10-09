(function(){

  app = angular.module('Home', []);
  var showReward = false;

  app.controller('SpellingDiv', function($scope){
  this.enteredText = '';
  this.spellingWord = 'word';

  this.right = function(){
    console.log("EnteredText " + this.enteredText);
    if(this.enteredText != this.spellingWord){
      return false;
    }else{
      return true;
    }
  };
  });

  app.controller('RewardDiv', function(){

    this.shouldShow = function(){
      console.log("Show: " + showReward);
      return showReward;
    };
  });

})();
