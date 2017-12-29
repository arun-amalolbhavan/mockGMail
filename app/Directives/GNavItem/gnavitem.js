'use strict';

angular.module('myApp.mail')
    .directive('gNavItem',[function(){

        var controller = [function(){
            var vm = this;

            vm.classSelected = function()
            {
                if(vm.selected)
                {
                    return "selected";
                }
                else
                    return "";
            }
        }]

        return{
            templateUrl: 'Directives/GNavItem/gnavitem.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            scope:{
                name:'@',
                selected:'@'
            }
        }
    }])