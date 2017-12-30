'use strict';

angular.module('myApp.mail')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail.list', {
            url:'/inbox',
            templateUrl: 'View/GContent/List/gcontent.list.html',
            controller: 'MailListCtrl as vm',
            bindToController: true

        });
    }])
    .controller('MailListCtrl', ['mailDataService','mailInstanceService','$scope','$rootScope',function(mailDataService, mailInstanceService,$scope,$rootScope) {

        var vm = this;
        $rootScope.$on('dataUpdated',function(e, data) {
            vm.mail_list = mailInstanceService.SearchResults;
        });

        $scope.$emit('updateData');
    }]);