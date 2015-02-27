var app = angular.module('myApp',[]);
app.controller("treeMapCtrl",function($scope){
	alert("test");
	$scope.openTreemap = new itTreemap();

})
app.controller("headerctr",function($scope){
	
	$scope.title = "Dashboard"

})
app.directive("headerdir",function(){

	return{templateUrl:"templates/header.html"}


})
app.directive("dashpanel",function(){

	return{templateUrl:"templates/dashpanels.html"}


})

app.directive("ftechart",function(){
	
	return{templateUrl:"templates/ftechart.html",
		compile:function(tElement, tAttrs, transclude){
			  return {
	        pre: function preLink(scope, iElement, iAttrs, controller) { 
	         
	         },
	        post: function postLink(scope, iElement, iAttrs, controller) {
	        	var lelement = d3.select("#ftechart")
	        	console.log(lelement);
	         var bchart = new barChart(lelement)
	         }
	      }

		}
	}



})
