(function(){
  app = angular.module('SpellingList', []);
  var mp3s = [];
  app.controller('Recorder', function($scope, $sce){
    $scope.words = [];
    $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;
    $scope.appendWord = function(mp3){
      console.log("Adding word object ");
      mp3s.push(mp3);
      console.log("Mp3: " + mp3s[0]);
    };



  });

})();
