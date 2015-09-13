
var myApp = angular.module('myApp',[]);

myApp.controller('MsgCtrl',function($scope,$http){

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };
    
    var onError = function (reason) {
        $scope.err = "Sorry , Could not load data ... ";
    };

    $scope.message = "Angular Demo 5 - Controller";

    //.get,.post,.put,.delete
    //Important .then - $http is async
    $http.get("https://api.github.com/users/sampathSL").then(onUserComplete,onError);

});
