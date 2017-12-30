'use strict';

// This service connects to the database and gets the mail data

angular.module('myApp.mail')
.factory('mailDataService',[function(){

    var dataBase = {};
    var current_mail_list = [];

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
        getInboxData: function(start, end){
            var result = {};

            dataBase.tags.forEach(function(tag, index){
                result[tag] = {};
                // Get mails with tag
                var items_with_tag = dataBase.total_mail_list.filter(function(item) {return item.tag == tag});
                result[tag].items = items_with_tag.slice(start,end);
                result[tag].total_items = items_with_tag.length;
            });

            return result;
        },

        totalMails: dataBase.total_mail_list.length,

        checkFlag : function(mailitem, flag) {
            return mailitem.flags[flag];
        }
    }

    return service;

}]);