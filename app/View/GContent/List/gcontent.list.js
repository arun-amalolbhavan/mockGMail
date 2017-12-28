'use strict';

angular.module('myApp.mail')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail.list', {
            url: '/inbox',
            templateUrl: 'view/gcontent/list/gcontent.list.html',
            controller: 'MailListCtrl',
            ControllerAs: 'vm',
            bindToController: true

        });
    }])
    .controller('MailListCtrl', [function() {

        var vm = this;
    }]);