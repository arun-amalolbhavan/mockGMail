'use strict';

angular.module('myApp.mail')
    .factory('mailInstanceService',['mailConfigService','$location','$rootScope',
        function(mailConfigService, $location, $rootScope){

        var instanceService = {};

        // Inbox results
        // This is partitioned into categories
        instanceService.InboxResults = {};

        // Other menu results including search
        // No categories, just a list of mails
        instanceService.SerachResults = [];

        // **** only handled for Inbox as of now ****/
        // Current state of paging
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

        // currently viewed category
        instanceService.ActiveCategory = 'Primary';
        instanceService.serachText = '';
        instanceService.selectedMails = [];

        // Get total item in inbox
        instanceService.getTotalInboxCount = function () {
            var count = 0;
            for(var i =0 ; i < instanceService.PageDetails.length ; i++)
            {
                count+= instanceService.PageDetails[i].MaxRecords;
            }
            return count;
        }

        // Get active category detauls
        instanceService.getActiveCategoryDetails = function() {
            return instanceService.PageDetails.filter(function (item) { return item.Category == instanceService.ActiveCategory })[0];
        }

        // Set active category
        instanceService.setActiveCategory = function(category) {
            instanceService.ActiveCategory = category;
            $rootScope.$emit('categorySelected');
        }

        // Get starting record number for a category based on the currently viewed page
        instanceService.getStartRecordNumber = function(category) {
            var page_details = instanceService.getCategoryDetails(category);
            return ((page_details.CurrentPage - 1) * mailConfigService.PageSize) + 1;
        }

        // Get ending record number for a catefory based on the currently viewed page
        instanceService.getEndRecordNumber = function(category) {
            var page_details = instanceService.getCategoryDetails(category);
            var next_range = page_details.CurrentPage * mailConfigService.PageSize;
            if(next_range > page_details.MaxRecords)
                return page_details.MaxRecords;
            else
                return next_range;

        }

        // Get starting record number for currently viewed category based on the currently viewed page
        instanceService.getCurrentStartRecordNumber = function() {
            return instanceService.getStartRecordNumber(instanceService.ActiveCategory);
        }

        // Get ending record number for currently viewed category based on the currently viewed page
        instanceService.getCurrentEndRecordNumber = function() {
            return instanceService.getEndRecordNumber(instanceService.ActiveCategory);
        }

        // Get category details
        instanceService.getCategoryDetails = function(category) {
            return instanceService.PageDetails.filter(function (item) { return item.Category == category })[0];
        }

        // set max record for category
        instanceService.setMaxRecord = function(catergory, value)
        {
            instanceService.PageDetails.filter(function (item) { return item.Category == catergory })[0].MaxRecords = value;
        }

        // get max record for category
        instanceService.getMaxRecord = function(category)
        {
            return instanceService.PageDetails.filter(function (item) { return item.Category == category })[0].MaxRecords;
        }

        // get max record for current category
        instanceService.getCurrentMaxRecord = function(catergory)
        {
            return instanceService.getMaxRecord(instanceService.ActiveCategory);
        }

        // get the index of a category
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

        // Go to next page of the active category
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

        // Go to prevous page of the active category
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