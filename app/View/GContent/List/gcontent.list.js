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
    .controller('MailListCtrl', ['mailDataService','mailInstanceService', 'mailConfigService', '$scope','$rootScope',function(mailDataService, mailInstanceService,mailConfigService,$scope,$rootScope) {

        var vm = this;
        var workaround = 0;

        $rootScope.$on('mailListUpdated',function(e, data) {
            if(e.currentScope.$$phase == '$digest')
                vm.mail_list = mailInstanceService.InboxResults;
            else {
                var index = getIndex(mailInstanceService.ActiveCategory);
                vm.mail_list[index] = mailInstanceService.InboxResults[index];

                workaround = 1;
            }
            console.log(vm.mail_list);

        });

        var getIndex = function(category) {
            if(category == 'Primary')
                return 0;
            else if(category == 'Social')
                return 1;
            else if(category == 'Promotions')
                return 2
        }

        vm.getCategoryIcon = function(category){
            if(category == 'Primary')
                return 'fa-envelope-square';
            else if(category == 'Social')
                return 'fa-users';
            else if(category == 'Promotions')
                return 'fa-tags';
        }

        vm.setActiveCategory = function (category) {
            if(workaround!=0)
            {
                workaround--;
                return;
            }
            vm.selected_index = getIndex(mailInstanceService.ActiveCategory);
            mailInstanceService.setActiveCategory(category);

        }

        $scope.$emit('updateMailList');
    }]);