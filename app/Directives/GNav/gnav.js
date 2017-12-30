'use strict';

angular.module('myApp.mail')
    .directive('gNav',[function(){

        var controller = ['mailConfigService', function(mailConfigService){
            var vm = this;
            vm.menuItems = mailConfigService.MenuItems;
        }]

        return{
            templateUrl: 'Directives/GNav/gnav.html',
            controller: controller,
            controllerAs: 'model',
            bindToController: true
        }
    }])