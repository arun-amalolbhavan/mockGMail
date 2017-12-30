'use strict';

angular.module('myApp.mail')
    .factory('mailConfigService',[function(){
        var configurations = {};

        configurations.MenuItems = ['Inbox', 'Starred', 'Important', 'Sent Mails', 'Drafts', 'Trash', 'Spam'];
        configurations.PageSize = 50;

        return configurations;
    }]);