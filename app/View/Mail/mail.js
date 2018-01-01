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

    .controller('ViewCtrl',['mailConfigService','$state','$stateParams','$rootScope','$transitions',
        function(mailConfigService,$state,$stateParams,$rootScope,$transitions){
        var child = ($stateParams.view || "");
        if( child == 'inbox' || child == "")
             $state.go('mail.list');
        else if(child == 'starred')
            $state.go('mail.starred');

        $transitions.onSuccess({}, function(transition) {
            $rootScope.$broadcast('urlUpdated');
            });

    }]);