'use strict';

angular.module('myApp.mail')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail.list', {
            url:'/inbox',
            templateUrl: 'View/GContent/List/gcontent.list.html',
            controller: 'MailListCtrl',
            ControllerAs: 'vm',
            bindToController: true

        });
    }])
    .controller('MailListCtrl', ['mailDataService','mailConfigService','mailInstanceService',function(mailDataService, mailConfigService, mailInstanceService) {

        var vm = this;
        vm.mail_ist = mailDataService.getInboxData(((mailDataService.currentPage - 1) * mailConfigService.PageSize) + 1, mailInstanceService.currentPage * mailConfigService.PageSize);
    }]);