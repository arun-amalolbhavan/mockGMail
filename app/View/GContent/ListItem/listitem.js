'use strict';

angular.module('myApp.mail')
    .directive('gMailItem',[function(){

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
            templateUrl: 'view/gcontent/listitem/listitem.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            scope:{
                name:'@',
                selected:'@'
            }
        }
    }])