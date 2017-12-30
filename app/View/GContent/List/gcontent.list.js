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
    .controller('MailListCtrl', ['mailDataService','$scope','$rootScope',function(mailDataService,$scope,$rootScope) {

        var vm = this;
        $rootScope.$on('dataUpdated',function(e, data) {
            vm.mail_list = mailDataService.SearchResults;
        })
        //vm.mail_list = mailDataService.getInboxData(((mailDataService.currentPage - 1) * mailConfigService.PageSize) + 1, mailInstanceService.currentPage * mailConfigService.PageSize);
        $scope.$emit('updateData');
    }]);