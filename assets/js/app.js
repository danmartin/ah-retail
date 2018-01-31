
// configure our routes
ahApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { templateUrl : '/pages/home.html', controller  : 'mainController' })
		.when('/home', { templateUrl : '/pages/home.html', controller  : 'mainController' })
		.when('/about', { templateUrl : '/pages/about.html', controller  : 'aboutController' })
		.when('/team', { templateUrl : '/pages/team.html', controller  : 'teamController' })
		.when('/contact', {templateUrl : '/pages/contact.html', controller  : 'contactController' })
		.when('/grooming', { templateUrl : '/pages/grooming.html', controller  : 'westbrookController' })
		.when('/damariscotta', { templateUrl : '/pages/damariscotta.html', controller  : 'damaController' })
		.when('/westbrook', { templateUrl : '/pages/westbrook.html', controller  : 'westbrookController' })
		.when('/brands', { templateUrl : '/pages/brands.html', controller  : 'brandsController' })
		.otherwise({ redirectTo: '/' });
		
		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
});

// create the controller and inject Angular's $scope
ahApp.controller('mainController', ['$scope', 'instagramFactory', function($scope, instagramFactory) {
	var _access_token = 'd49b98d0ca954a47af75a6d6ac011efc';
	$scope.isExpanded = false;
	$scope.toggleNav = function(){
		if( $(".navbar-toggler").is(":visible") ){
			$scope.isExpanded ? $(".navbar-toggler").click() : "";
			$scope.isExpanded = !$scope.isExpanded;
		}
		
	}
	$scope.message = 'Everyone come and see how good I look!';
}]);

// TODO: Create sidabar directives and designate for page scope

ahApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

ahApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
ahApp.controller('hoursController', function($scope) {
	$scope.message = 'blah blah Hours';
});
ahApp.controller('groomingController', function($scope) {
	$scope.message = 'blah blah Grooming';
});
ahApp.controller('teamController',['$scope','employeeData',function($scope,employeeData) {
	$scope.message = 'Meet The Team';
	$scope.employees = employeeData;
}]);
ahApp.controller('damaController', function($scope, $sce) {
	$scope.message = '15 Coastal Marketplace<br>Damariscotta, ME 04543';
	$scope.message = $sce.trustAsHtml($scope.message);
});
ahApp.controller('westbrookController', function($scope) {
	$scope.message = 'Westbrook';
});
ahApp.controller('brandsController',['$scope','brandData',function($scope,brandData){
	$scope.message = 'Brands';
	$scope.brands = brandData;
}]);