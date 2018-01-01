'use strict';

angular.module('myApp.mail')
    .directive('gNavItem',[function(){

        var controller = ['mailInstanceService','mailConfigService','$location',
            function(mailInstanceService, mailConfigService,$location){
            var vm = this;

            // Mark the menu item as selected
            vm.classSelected = function()
            {
                if(vm.menuItem.selected)
                {
                    return "selected";
                }
                else
                    return "";
            }

            // click event handler to mark the menu item as selected
            vm.selectMenuItem = function () {
                mailConfigService.selectMenu(vm.menuItem.url);

                // Update the view for the selected menu
                $location.path(vm.menuItem.url);

            }

            vm.itemCount = '';

            vm.getItemCount = function() {
                if (vm.menuItem.Name == 'Inbox')
                    return '(' + mailInstanceService.getTotalInboxCount()+ ')';
            }

        }]



        return{
            templateUrl: 'Directives/GNavItem/gnavitem.html',
            controller: controller,
            controllerAs: 'mo',
            bindToController: true,
            scope:{
                menuItem: '=menu'
            }
        }
    }])