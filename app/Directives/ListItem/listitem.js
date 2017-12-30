'use strict';

angular.module('myApp.mail')
    .directive('gMailItem',[function(){

        var controller = [function(){
            var vm = this;

            vm.getFromName = function()
            {
                return vm.mailItem.from.substring(vm.mailItem.from.lastIndexOf("<")+1,vm.mailItem.from.lastIndexOf(">"));
            }

            vm.getStarIcon = function ()
            {
                if(vm.mailItem.flags.starred)
                    return "fa-star star-color";
                else
                    return "fa-star-o";
            }

            vm.toggleStar = function($event)
            {
                if(vm.mailItem.flags.starred)
                    vm.mailItem.flags.starred = false
                else
                    vm.mailItem.flags.starred = true;

            }

            vm.getBookmarkIcon = function ()
            {
                if(vm.mailItem.flags.important)
                    return "fa-bookmark star-color";
                else
                    return "fa-bookmark-o";
            }

            vm.toggleBookmark = function()
            {
                if(vm.mailItem.flags.important)
                    vm.mailItem.flags.important = false
                else
                    vm.mailItem.flags.important = true;
            }
        }]

        return{
            templateUrl: 'Directives/ListItem/listitem.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            scope:{
                mailItem:'=mail'
            }
        }
    }])