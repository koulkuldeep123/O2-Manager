(function () {
    'use strict';

    angular
        .module('app')
        .controller('DoughnutCtrl', DoughnutCtrl);

    DoughnutCtrl.$inject = ['chart.js'];
    function DoughnutCtrl($scope) {
        $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];
    }

})();
