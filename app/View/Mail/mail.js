'use strict';

angular.module('myApp.mail', ['ui.router','ngMaterial'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail', {
            url: '/mail',
            templateUrl: 'View/Mail/mail.html',
            controller: 'ViewCtrl'
        })
            .state('mail.view',{
                url:'/:view',
                controller: 'ViewCtrl'
            });

    }])

    .controller('ViewCtrl',['mailConfigService','$rootScope','$transitions',
        function(mailConfigService,$rootScope,$transitions){

        // Hook for change in URL
        $transitions.onSuccess({}, function(transition) {
            $rootScope.$broadcast('urlUpdated');
            });

    }]);