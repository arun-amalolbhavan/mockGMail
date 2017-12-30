'use strict';

angular.module('myApp.mail')
    .directive('gMailItem',[function(){

        var controller = [function(){
            var vm = this;
            vm.getFromName = function()
            {
                return vm.mailItem.from.substring(vm.mailItem.from.lastIndexOf("<")+1,vm.mailItem.from.lastIndexOf(">"));
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