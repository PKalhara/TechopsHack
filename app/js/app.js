var myApp = angular.module('myApp', ['ngRoute','toastr']);


myApp.config(['$routeProvider','toastrConfig', function($routeProvider,toastrConfig) {
  $routeProvider.
   when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    }).
   when('/analytics', {
      templateUrl: 'views/analitics.html',
      controller: 'AnalyticsController'
    }).
    when('/login', {
      templateUrl: 'views/index.html',
      controller: 'LoginController'
    }).
    otherwise({
      redirectTo: '/home'
    });

angular.extend(toastrConfig, {
    allowHtml: false,
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    messageClass: 'toast-message',
    onHidden: null,
    onShown: null,
    onTap: null,
    progressBar: true,
    tapToDismiss: true,
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast',
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      preventOpenDuplicates: true
  });

}]);

