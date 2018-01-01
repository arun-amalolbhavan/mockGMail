'use strict';

angular.module('myApp.mail')
    .factory('mailConfigService',['$rootScope','$location', function($rootScope, $location){
        var configurations = {};

        // Event handler for handling url updation
        // Update the selected menu based on URL
        $rootScope.$on('urlUpdated',function (event) {
            configurations.selectMenu($location.path());
        })

        configurations.MenuItems= [
            { SearchKey:'', Name:'Inbox', selected:true, url:'/mail/inbox' },
            { SearchKey:'is:starred', Name:'Starred', selected:false, url:'/mail/starred' },
            { SearchKey:'is:important', Name:'Important', selected:false, url:'/mail/important' },
            { SearchKey:'in:sent', Name:'Sent Mails', selected:false, url:'/mail/sent' },
            { SearchKey:'in:draft', Name:'Drafts', selected:false, url:'/mail/draft' },
            { SearchKey:'in:trash', Name:'Trash', selected:false, url:'/mail/trashs' },
            { SearchKey:'in:spam', Name:'Spam', selected:false, url:'/mail/spam' }
        ];
        configurations.PageSize = 50;

        // Function for selection menu based on url
        configurations.selectMenu = function(menu_name){
            for(var i=0; i< configurations.MenuItems.length ; i++){
                var menu = configurations.MenuItems[i];
                if(menu.url.toLowerCase() == menu_name.toLowerCase())
                    menu.selected = true;
                else
                    menu.selected = false;
            }
        }

        return configurations;
    }]);