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
    .controller('MailStarredCtrl',['$stateParams','$scope','mailConfigService','mailInstanceService',function($stateParams, $scope, mailConfigService, mailInstanceService){

        $scope.itemList = [];

        $scope.$on('mailListUpdated',function(e, data) {
            $scope.itemList = mailInstanceService.SerachResults;
        });

        $scope.$emit('updateMailList', 'starred');
    }])
    .controller('MailImportantCtrl',['$stateParams','$scope','mailConfigService','mailInstanceService',function($stateParams, $scope, mailConfigService, mailInstanceService){

    $scope.itemList = [];

    $scope.$on('mailListUpdated',function(e, data) {
        $scope.itemList = mailInstanceService.SerachResults;
    });

    $scope.$emit('updateMailList', 'important');
}]);