var app = angular.module('myApp',[]);
app.controller("headerctr",function($scope){
	$scope.title = "Dashboard"

})
app.directive("headerdir",function(){

	return{templateURL:"templates/header.html"}


})


