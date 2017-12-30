'use strict';

angular.module('myApp.mail')
    .factory('mailConfigService',[function(){
        var configurations = {};

        configurations.MenuItems= [
            { SearchKey:'', Name:'Inbox', selected:true },
            { SearchKey:'is:starred', Name:'Starred', selected:false },
            { SearchKey:'is:important', Name:'Important', selected:false },
            { SearchKey:'in:sent', Name:'Sent Mails', selected:false },
            { SearchKey:'in:draft', Name:'Drafts', selected:false },
            { SearchKey:'in:trash', Name:'Trash', selected:false },
            { SearchKey:'in:spam', Name:'Spam', selected:false }
        ];
        configurations.PageSize = 50;

        configurations.selectMenu = function(menu_name){
            for(var i=0; i< configurations.MenuItems.length ; i++){
                var menu = configurations.MenuItems[i];
                if(menu.Name == menu_name)
                    menu.selected = true;
                else
                    menu.selected = false;
            }
        }

        return configurations;
    }]);