
var app = angular.module('myapp', []);



app.directive('header', function() {

    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl : "/views/header/header.html",
        link : function(s, e, a) {
            s.myclass = a.name;

        }
    };
});
app.directive('footer', function() {
    var directive = {};
    directive.restrict = 'AE';
    directive.replace = true;
    directive.templateUrl = "/views/footer/footer.html";
    return directive;
});