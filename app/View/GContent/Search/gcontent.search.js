'use strict';

angular.module('myApp.mail')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mail.starred', {
            url:'/starred',
            templateUrl: 'View/GContent/Search/gcontent.search.html',
            controller: 'MailStarredCtrl'

        }).state('mail.important', {
            url:'/important',
            templateUrl: 'View/GContent/Search/gcontent.search.html',
            controller: 'MailImportantCtrl'

        });
    }])
    .controller('MailStarredCtrl',['$stateParams','$scope','mailConfigService','mailInstanceService',
        function($stateParams, $scope, mailConfigService, mailInstanceService){

        $scope.itemList = [];

        // Event handler for mailListUpdated event
        // This event will be triggerd by mailDataServie after getting the new list based on the current page
        $scope.$on('mailListUpdated',function(e, data) {
            $scope.itemList = mailInstanceService.SerachResults;
        });

        // Trigger event for updating the list
        // Controller will execute on menu selection
        $scope.$emit('updateMailList', 'starred');
    }])
    .controller('MailImportantCtrl',['$stateParams','$scope','mailConfigService','mailInstanceService',
        function($stateParams, $scope, mailConfigService, mailInstanceService){

        $scope.itemList = [];

        // Event handler for mailListUpdated event
        // This event will be triggerd by mailDataServie after getting the new list based on the current page
        $scope.$on('mailListUpdated',function(e, data) {
            $scope.itemList = mailInstanceService.SerachResults;
        });

        // Trigger event for updating the list
        // Controller will execute on menu selection
        $scope.$emit('updateMailList', 'important');
}]);