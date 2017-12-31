'use strict';

// This service connects to the database and gets the mail data

angular.module('myApp.mail')
.factory('mailDataService',['$rootScope','mailInstanceService','mailConfigService',function($rootScope, mailInstanceService, mailConfigService){

    var dataBase = {};

    $rootScope.$on('updateMailList', function(e, data){
        var context = data || '';
        if(context == '')
            service.getInboxData(mailInstanceService.PageDetails);
        else if(context == 'starred')
            service.getStarredMails();
        else if (context == 'important')
            service.getImportantMails();
    });

    ///////////////////////////
    // Generate the database
    ///////////////////////////
    (function (){

        dataBase.total_mail_list = [];
        dataBase.tags = ['Primary', 'Social','Promotions'];
        var total_number_of_mails = 1100;

        for(var i =1; i < total_number_of_mails; i++)
        {
            var mailItem = {
                subject:'Sample Subject ' + i,
                from:'<Arun A> arun.a@gmail.com',
                to:['<recepient>dummy@gmail.com'],
                body_type:'text',
                body:'Message '+ i +' : This is a samlple text \r\n\
                  with multiple lines. \r\n Hello, have a nice day....',
                attachments:[],
                sent_time:new Date(),
                flags:{
                    read: true,
                    starred: false,
                    important: false
                },
                tag:'Primary',
                Category: 'Inbox',
                labels: []
            };

            if(i%20 == 0)
                mailItem.tag = 'Promotions';
            else if(i%10 == 0)
                mailItem.tag = 'Social';

            dataBase.total_mail_list.push(mailItem);
        }
    })();



    var service = {
        getInboxData: function(range){

            var result = [];

            dataBase.tags.forEach(function(tag, index){
                var result_category = {};
                result_category.Name = tag;
                // Get mails with tag
                var items_with_tag = dataBase.total_mail_list.filter(function(item) {return item.tag == tag});
                mailInstanceService.setMaxRecord(tag,items_with_tag.length);
                result_category.items = items_with_tag.slice(mailInstanceService.getStartRecordNumber(tag)-1,mailInstanceService.getEndRecordNumber(tag));
                result.push(result_category);
            });

            mailInstanceService.InboxResults = result;
            $rootScope.$broadcast('mailListUpdated');
            //return result;
        },

        getImportantMails: function() {
            var result = dataBase.total_mail_list.filter(function (item) { return item.flags.important });
            mailInstanceService.SerachResults = result;
            $rootScope.$broadcast('mailListUpdated');
        },

        getStarredMails: function() {
            var result = dataBase.total_mail_list.filter(function (item) { return item.flags.starred });
            mailInstanceService.SerachResults = result;
            $rootScope.$broadcast('mailListUpdated');
        },

        TotalMails: dataBase.total_mail_list.length,

        checkFlag : function(mailitem, flag) {
            return mailitem.flags[flag];
        }
    }

    return service;

}]);