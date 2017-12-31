'use strict';

angular.module('myApp.mail')
    .directive('gMailEditor',[function(){

        var controller = ['mailConfigService', function(mailConfigService){
            var vm = this;

            vm.closeWindow = function() {
                vm.opened = false;
            }

        }]

        return{
            templateUrl: 'Directives/GMailEditor/gmaileditor.html',
            controller: controller,
            controllerAs: 'editor',
            bindToController: true,
            scope:{
                opened:'='
            }
        }
    }])