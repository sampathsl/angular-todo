//EFFI
(function () {

    var myApp = angular.module('myApp',[]);

    var MsgCtrl = function($scope,$http){

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.err = "Sorry , Could not load data ... ";
        };

        $scope.message = "Angular Demo 7 - Controller , Module";

        //.get,.post,.put,.delete
        //Important .then - $http is async
        $http.get("https://api.github.com/users/sampathSL").then(onUserComplete,onError);

    };

    //Production minify error issue fixed
    myApp.controller("MsgCtrl",["$scope","$http",MsgCtrl]);

}());


