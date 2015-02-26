var app = angular.module('myapp',[]);
app.controller("headerctr",function($scope){
	
	$scope.title = "Dashboard"

})
app.directive("headerdir",function(){

	return{templateUrl:"templates/header.html"}


})
app.directive("dashpanel",function(){

	return{templateUrl:"templates/dashpanels.html"}


})


