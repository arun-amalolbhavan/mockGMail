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

        // Watch for tab selection change
        // Events in md-tab controls change index wrongly when rebinding the data for the last tab
        //  Have to work around this issue
        $scope.$watch('vm.selected_index', function (value) {
            if(workaround) {
                vm.selected_index = 2;
                workaround = false;
            }
            else
                mailInstanceService.setActiveCategory(getCategoryFromIndex(value));
        });

        // Event handler for mailListUpdated event
        // This event will be triggerd by mailDataServie after getting the new list based on the current page
        $rootScope.$on('mailListUpdated',function(e, data) {
            if(e.currentScope.$$phase == '$digest')
                //Update the full list for first time
                vm.mail_list = mailInstanceService.InboxResults;
            else {
                // Update only the current tab data
                // Otherwise data for all tabs will be rebinded and correspoding tab event will be fired
                var index = getIndex(mailInstanceService.ActiveCategory);
                vm.mail_list[index] = mailInstanceService.InboxResults[index];

                //workaround for th issue mentioned earlier
                if(index==2)
                    workaround = true;
            }
        });

        // Get tab index for the category
        var getIndex = function(category) {
            if(category == 'Primary')
                return 0;
            else if(category == 'Social')
                return 1;
            else if(category == 'Promotions')
                return 2
        }

        // Get the category name for the index
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

        // set active catefory
        vm.setActiveCategory = function (category) {
            mailInstanceService.setActiveCategory(category);

        }

        $scope.$emit('updateMailList');
    }]);