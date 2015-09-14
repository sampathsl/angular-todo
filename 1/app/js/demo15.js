//EFFI
(function () {

    var myApp = angular.module('myApp',[]);

    var MsgCtrl = function($scope,$http){

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onUserRepoComplete = function (response) {
            $scope.repos_ = response.data;
            $scope.reposSortOrder = "+stargazers_count";
        };

        var onError = function (reason) {
            $scope.err = "Sorry , Could not load data ... ";
        };

        $scope.message = "Angular Demo 15 - Controllers , Filters , Directives (ng-include,ng-show,ng-hide - HAPPY :))";
        //.get,.post,.put,.delete
        //Important .then - $http is async
        $scope.search = function (userName) {
            $http.get("https://api.github.com/users/"+userName).then(onUserComplete,onError);
            $http.get("https://api.github.com/users/"+userName+"/repos").then(onUserRepoComplete,onError);
            $scope.userName = userName;
        };
    };

    //Production minify error issue fixed
    myApp.controller("MsgCtrl",["$scope","$http",MsgCtrl]);

}());


