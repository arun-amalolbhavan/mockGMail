'use strict';

angular.module('myApp.mail')
    .directive('gPagination',['mailDataService','mailInstanceService','mailConfigService',function(mailDataService, mailInstanceService, mailConfigService){

        // var maxPages = Math.ceil(mailDataService.TotalMails/mailConfigService.PageSize);

        var controller = ['$scope', '$rootScope',function($scope, $rootScope){
            var vm = this;

            $rootScope.$on('categorySelected', function() {
                vm.currentRecords = getRange();
            });

            var getRange = function () {
                return mailInstanceService.getCurrentStartRecordNumber() + '-' +
                    mailInstanceService.getCurrentEndRecordNumber() + ' of ' + mailInstanceService.getCurrentMaxRecord();
            }

            vm.currentRecords = getRange();

            vm.nextPage = function($event) {
                if(mailInstanceService.incrementActiveCategoryPage()) {
                    vm.currentRecords = getRange();
                    $scope.$emit('updateMailList');
                }
            }

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