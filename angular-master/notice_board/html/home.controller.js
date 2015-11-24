(function () {
    'use strict';

    angular
        .module('app')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function NotificationController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.notification = notification;

        function notification() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('views/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
