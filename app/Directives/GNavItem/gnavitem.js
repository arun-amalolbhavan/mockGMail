'use strict';

angular.module('myApp.mail')
    .directive('gNavItem',[function(){

        var controller = ['mailInstanceService','mailConfigService',function(mailInstanceService, mailConfigService){
            var vm = this;
            vm.classSelected = function()
            {
                if(vm.menuItem.selected)
                {
                    return "selected";
                }
                else
                    return "";
            }
            
            vm.selectMenuItem = function () {
                mailConfigService.selectMenu(vm.menuItem.Name);
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