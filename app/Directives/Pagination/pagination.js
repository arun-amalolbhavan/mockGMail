'use strict';

angular.module('myApp.mail')
    .directive('gPagination',['mailDataService','mailInstanceService','mailConfigService',
        function(mailDataService, mailInstanceService, mailConfigService){

        var controller = ['$scope', '$rootScope',function($scope, $rootScope){
            var vm = this;

            // Event handler for catetory selected
            // Inbox are partitioned into sections
            //      and page elements trigged this event based on the category currently viewed
            // On the page catagories are partitioned by using tabs
            $rootScope.$on('categorySelected', function() {
                vm.currentRecords = getRange();
            });

            // Get the range of items currently viewed
            // eg: 1-50 of 1000
            var getRange = function () {
                return mailInstanceService.getCurrentStartRecordNumber() + '-' +
                    mailInstanceService.getCurrentEndRecordNumber() + ' of ' + mailInstanceService.getCurrentMaxRecord();
            }

            //  View model for range
            vm.currentRecords = getRange();

            // Click event handler for next page
            vm.nextPage = function($event) {
                if(mailInstanceService.incrementActiveCategoryPage()) {
                    vm.currentRecords = getRange();
                    $scope.$emit('updateMailList');
                }
            }

            // Click event handler for previous page
            vm.previousPage = function() {
                if(mailInstanceService.decrementActiveCategoryPage()){
                    vm.currentRecords = getRange();
                    $scope.$emit('updateMailList');
                }
            }

        }]

        return{
            templateUrl: 'Directives/Pagination/pagination.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            scope:{

            }
        }
    }])