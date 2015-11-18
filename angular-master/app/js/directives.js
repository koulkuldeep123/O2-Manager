//
//var app = angular.module('dapp', []);
//
//app.directive('header', function() {
//
//    return {
//        restrict: 'AE',
//        replace: 'true',
//        templateUrl : "templates/header/header.html",
//        link : function(s, e, a) {
//            s.myclass = a.name;
//
//        }
//    };
//});
//app.directive('footer', function() {
//    var directive = {};
//    directive.restrict = 'AE';
//    directive.replace = true;
//    directive.templateUrl = "templates/footer/footer.html";
//    return directive;
//});

app.directive('heade', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {user: '='},
        templateUrl: "/templates/header/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});