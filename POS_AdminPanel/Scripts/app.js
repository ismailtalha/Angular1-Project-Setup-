var app = angular.module('POS', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/auth/Login');
    $stateProvider
			.state('auth', {
			    abstract: true,
			    module: 'public',
			    url: '/auth',
			    template: '<div ui-view class="scroll_bar" ></div>'
			})
         .state('auth.Login', {
             url: '/Login',
             controller: 'LoginCtrl',
             templateUrl: 'Pages/Login/LoginPage.html'
         })
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'app.html'
        })
		.state('app.Home', {
		    url: '/Home',
		    controller: 'HomeCtrl',
		    templateUrl: 'Pages/Home/HomePage.html',

		})
        .state('app.secondpage', {
            url: '/secondpage',
            controller: 'SecondPageCtrl',
            templateUrl: 'Pages/SecondPage/SecondPage.html',

        })
        	

		
	
});
    "use strict";
    app.controller("HomeCtrl", function ($scope, $state, $rootScope, $http) {
      
    })
    app.controller("SecondPageCtrl", function ($scope, $state, $rootScope, $http) {
       
    })
    app.controller("LoginCtrl", function ($scope, $state, $rootScope, $http) {
       
    })

