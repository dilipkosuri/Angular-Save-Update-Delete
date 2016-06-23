angular
  .module('angularChallenge', [
    'ngRoute', 'ngDialog'
  ])
  .controller('MainController', MainController)
  .service('SharedService', SharedService)
  .directive('includeTemplate', includeTemplate)
  .config(['$routeProvider', function($routeProvider
      ) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  }]);

