
var myApp = angular.module('myApp',[]);

myApp.controller('MsgCtrl',function($scope){

    var person = {
        firstName : "Sampath",
        lastName : "Ferrari",
        imageSrc : "http://seeklogo.com/images/F/Ferrari-logo-1B881E82BA-seeklogo.com.gif"
    };

    $scope.message = "Angular Demo 4 - Controller";
    $scope.person = person;

});
