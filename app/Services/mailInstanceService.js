'use strict';

angular.module('myApp.mail')
    .factory('mailInstanceService',['mailConfigService','$location',function(mailConfigService, $location){

        var instanceService = {};

        instanceService.currentPage = 1;
        instanceService.serachText = '';
        instanceService.selectedMails = [];

        //instanceService.searchResult = mailDataService.getInboxData(((instanceService.currentPage-1)*mailConfigService.PageSize)+1, instanceServ

        return instanceService;

    }]);