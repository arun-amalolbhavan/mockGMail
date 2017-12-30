'use strict';

angular.module('myApp.mail')
    .factory('mailConfigService',[function(){
        var configurations = {};

        configurations.MenuItems= [
            { SearchKey:'', Name:'Inbox' },
            { SearchKey:'is:starred', Name:'Starred' },
            { SearchKey:'is:important', Name:'Important' },
            { SearchKey:'in:sent', Name:'Sent Mails' },
            { SearchKey:'in:draft', Name:'Drafts' },
            { SearchKey:'in:trash', Name:'Trash' },
            { SearchKey:'in:spam', Name:'Spam' }
        ];
        configurations.PageSize = 50;

        return configurations;
    }]);