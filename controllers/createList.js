(function(){
  app = angular.module('SpellingList', []);
  var mp3s = []; // List of mp3 audio urls because these will be persisted.
  app.controller('Recorder', function($scope, $sce){
    $scope.words = []; //List of wav format audio urls because they load faster.
    $scope.trustAsResourceUrl = $sce.trustAsResourceUrl; // Required or angular will throw untrusted url error.

    $scope.appendWord = function(mp3){
      console.log("Adding word object ");
      mp3s.push(mp3);
      console.log("Mp3: " + mp3s[0]);
    };

    $scope.remove = function(index){
        console.log("Removing: " +  index);
    }
  });

})();
