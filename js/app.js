var app = angular.module('myApp',[]);
app.controller("treeMapCtrl",function($scope){
	$scope.openTreemap = new itTreemap();

})