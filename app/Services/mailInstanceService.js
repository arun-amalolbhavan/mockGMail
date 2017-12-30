'use strict';

angular.module('myApp.mail')
    .factory('mailInstanceService',['mailConfigService','$location','$rootScope',function(mailConfigService, $location, $rootScope){

        var instanceService = {};

        instanceService.InboxResults = {};

        instanceService.PageDetails = [
            {
                Category:'Primary',
                CurrentPage:1,
                MaxRecords: 0,
            },
            {
                Category:'Social',
                CurrentPage:1,
                MaxRecords: 0
            },
            {
                Category:'Promotions',
                CurrentPage:1,
                MaxRecords: 0
            }
        ];
        instanceService.ActiveCategory = 'Primary';
        instanceService.serachText = '';
        instanceService.selectedMails = [];

        instanceService.getTotalInboxCount = function () {
            var count = 0;
            for(var i =0 ; i < instanceService.PageDetails.length ; i++)
            {
                count+= instanceService.PageDetails[i].MaxRecords;
            }
            return count;
        }

        instanceService.getActiveCategoryDetails = function() {
            return instanceService.PageDetails.filter(function (item) { return item.Category == instanceService.ActiveCategory })[0];
        }

        instanceService.setActiveCategory = function(category) {
            instanceService.ActiveCategory = category;
            $rootScope.$broadcast('categorySelected');
        }

        instanceService.getStartRecordNumber = function(category) {
            var page_details = instanceService.getCategoryDetails(category);
            return ((page_details.CurrentPage - 1) * mailConfigService.PageSize) + 1;
        }

        instanceService.getEndRecordNumber = function(category) {
            var page_details = instanceService.getCategoryDetails(category);
            var next_range = page_details.CurrentPage * mailConfigService.PageSize;
            if(next_range > page_details.MaxRecords)
                return page_details.MaxRecords;
            else
                return next_range;

        }

        instanceService.getCurrentStartRecordNumber = function() {
            return instanceService.getStartRecordNumber(instanceService.ActiveCategory);
        }

        instanceService.getCurrentEndRecordNumber = function() {
            return instanceService.getEndRecordNumber(instanceService.ActiveCategory);
        }

        instanceService.getCategoryDetails = function(category) {
            return instanceService.PageDetails.filter(function (item) { return item.Category == category })[0];
        }

        instanceService.setMaxRecord = function(catergory, value)
        {
            instanceService.PageDetails.filter(function (item) { return item.Category == catergory })[0].MaxRecords = value;
        }

        instanceService.getMaxRecord = function(category)
        {
            return instanceService.PageDetails.filter(function (item) { return item.Category == category })[0].MaxRecords;
        }

        instanceService.getCurrentMaxRecord = function(catergory)
        {
            return instanceService.getMaxRecord(instanceService.ActiveCategory);
        }

        instanceService.checkIndexOfCategory = function(category)
        {
            var index = 0;
            for(var i = 0; i < instanceService.PageDetails.length; i++) {
                if(instanceService.PageDetails[i].Category == category) {
                    index = i;
                    break;
                }
            }
            return index;
        }

        instanceService.incrementActiveCategoryPage = function() {
            var active = instanceService.getActiveCategoryDetails();
            var maxPages = Math.ceil(instanceService.getActiveCategoryDetails().MaxRecords/mailConfigService.PageSize);
            if(instanceService.getActiveCategoryDetails().CurrentPage < maxPages) {
                instanceService.getActiveCategoryDetails().CurrentPage++;
                return true;
            }
            else
                return false;
        }

        instanceService.decrementActiveCategoryPage = function() {
            if(instanceService.getActiveCategoryDetails().CurrentPage > 1) {
                instanceService.getActiveCategoryDetails().CurrentPage--;
                return true;
            }
            else
                return false;
        }

        //instanceService.searchResult = mailDataService.getInboxData(((instanceService.currentPage-1)*mailConfigService.PageSize)+1, instanceServ

        return instanceService;

    }]);