'use strict';

angular.module('myApp.mail')
    .directive('gPagination',['mailDataService','mailInstanceService','mailConfigService',function(mailDataService, mailInstanceService, mailConfigService){

        // var maxPages = Math.ceil(mailDataService.TotalMails/mailConfigService.PageSize);

        var controller = ['$scope',function($scope){
            var vm = this;

            var getRange = function () {
                return mailInstanceService.getCurrentStartRecordNumber() + '-' + mailInstanceService.getCurrentEndRecordNumber() + ' of ' + mailInstanceService.getCurrentMaxRecord();
            }

            vm.currentRecords = getRange();

            vm.nextPage = function() {
                if(mailInstanceService.incrementActiveCategoryPage()) {
                    vm.currentRecords = getRange();
                    $scope.$emit('updateData');
                }

            }

            vm.previousPage = function() {
                if(mailInstanceService.decrementActiveCategoryPage()){
                    vm.currentRecords = getRange();
                    $scope.$emit('updateData');
                }
            }

        }]

        return{
            templateUrl: 'Directives/Pagination/pagination.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])