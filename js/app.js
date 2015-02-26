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

app.directive("ftechart",function(){
	
	return{templateUrl:"templates/ftechart.html",
		compile:function(tElement, tAttrs, transclude){
			  return {
	        pre: function preLink(scope, iElement, iAttrs, controller) { 
	         
	         },
	        post: function postLink(scope, iElement, iAttrs, controller) {
	         var bchart = new barChart()
	         }
	      }

		}
	}



})
