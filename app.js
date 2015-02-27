var newspaperBeats = angular.module('newspaperBeats', ['ui.router']);

newspaperBeats.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'BeatsCtrl'
  });
  $stateProvider.state('newReporter', {
    url: "/newReporter/:beatId",
    templateUrl: "partials/newReporter.html",
    controller: 'ReportersCtrl'
  });
});
