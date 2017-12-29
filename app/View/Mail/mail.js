'use strict';

angular.module('myApp.mail', ['ui.router','ngMaterial'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail', {
            url: '/mail',
            templateUrl: 'View/Mail/mail.html',
            controller: 'MailCtrl'
        });

    }])

    .controller('MailCtrl', ['$state',function($state) {

    }]);