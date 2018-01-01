'use strict';

angular.module('myApp.mail')
    .directive('gNav',[function(){

        var controller = ['mailConfigService', function(mailConfigService){
            var vm = this;

            // Menu Items
            vm.menuItems = mailConfigService.MenuItems;

            // Compose email box opened or closed
            vm.ComposeMailOpened = false;

            // Click event handler for compose email
            vm.openNewMailEdtitor = function () {
                vm.ComposeMailOpened = true;
            }
        }]

        return{
            templateUrl: 'Directives/GNav/gnav.html',
            controller: controller,
            controllerAs: 'model',
            bindToController: true
        }
    }])