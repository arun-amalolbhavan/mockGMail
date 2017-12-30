'use strict';

angular.module('myApp.mail')
    .directive('gPagination',['mailDataService','mailInstanceService','mailConfigService',function(mailDataService, mailInstanceService, mailConfigService){

        var maxPages = Math.ceil(mailDataService.TotalMails/mailConfigService.PageSize);

        var controller = ['$scope',function($scope){
            var vm = this;
            vm.currentRecords = ((mailInstanceService.currentPage-1)*mailConfigService.PageSize +1 )+ '-' +
                mailInstanceService.currentPage * mailConfigService.PageSize + ' of ' + mailDataService.TotalMails;

            vm.nextPage = function() {
                if(mailInstanceService.currentPage < maxPages) {
                    mailInstanceService.currentPage++;
                    vm.currentRecords = ((mailInstanceService.currentPage-1)*mailConfigService.PageSize + 1) + '-' +
                        mailInstanceService.currentPage * mailConfigService.PageSize + ' of ' + mailDataService.TotalMails;
                    $scope.$emit('updateData');
                }

            }

            vm.previousPage = function() {
                if(mailInstanceService.currentPage > 1) {
                    mailInstanceService.currentPage--;
                    vm.currentRecords = ((mailInstanceService.currentPage-1)*mailConfigService.PageSize + 1) +'-' +
                        mailInstanceService.currentPage * mailConfigService.PageSize + ' of ' + mailDataService.TotalMails;
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