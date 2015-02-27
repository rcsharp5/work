var app = angular.module('myApp',[]);
app.controller("treeMapCtrl",function($scope){
	alert("test");
	$scope.openTreemap = new itTreemap();

})