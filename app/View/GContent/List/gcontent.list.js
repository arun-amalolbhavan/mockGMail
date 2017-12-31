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
    .controller('MailListCtrl', ['mailDataService','mailInstanceService', 'mailConfigService', '$scope','$rootScope',
        function(mailDataService, mailInstanceService,mailConfigService,$scope,$rootScope) {

        var vm = this;
        var workaround = false;
        vm.selected_index = 0;

        $scope.$watch('vm.selected_index', function (value) {
            if(workaround) {
                vm.selected_index = 2;
                workaround = false;
            }
            else
                mailInstanceService.setActiveCategory(getCategoryFromIndex(value));
        });

        $rootScope.$on('mailListUpdated',function(e, data) {
            if(e.currentScope.$$phase == '$digest')
                vm.mail_list = mailInstanceService.InboxResults;
            else {
                var index = getIndex(mailInstanceService.ActiveCategory);
                vm.mail_list[index] = mailInstanceService.InboxResults[index];
                if(index==2)
                    workaround = true;
            }
        });

        var getIndex = function(category) {
            if(category == 'Primary')
                return 0;
            else if(category == 'Social')
                return 1;
            else if(category == 'Promotions')
                return 2
        }

        var getCategoryFromIndex = function (index) {
            if(index == 0)
                return 'Primary';
            else if(index == 1)
                return 'Social';
            else if(index == 2)
                return 'Promotions';
        };

        vm.getCategoryIcon = function(category){
            if(category == 'Primary')
                return 'fa-envelope-square';
            else if(category == 'Social')
                return 'fa-users';
            else if(category == 'Promotions')
                return 'fa-tags';
        }

        vm.setActiveCategory = function (category) {
            mailInstanceService.setActiveCategory(category);

        }

        $scope.$emit('updateMailList');
    }]);