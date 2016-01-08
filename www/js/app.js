'use strict';

angular.module('smsApp', [
  'ui.router',
  'App.Controllers'
])
.config(uiRoute);

function uiRoute($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/app'); // default route
  
  $stateProvider.state('app', {
    url: '/app',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
  })
  .state('app.sms', {
    url: '/sms',
    views: {
      "mainContent": {
        templateUrl: 'views/sms_send.html',
        controller: 'MessageSendCtrl',
      }
    }
  })
  .state('app.contacts', {
    url: '/contacts',
    views: {
      "mainContent": {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
      }
    }
    
  });
}


function ngRouter($routeProvider) {
    $routeProvider
      .when('/sms_send', {
        templateUrl: 'views/sms_send.html',
        controller: 'MessageSendCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }