'use strict';

angular.module('myApp.mail')
    .directive('gMailEditor',[function(){

        var controller = ['mailConfigService', function(mailConfigService){
            var vm = this;

            // Event for closing the email compose window
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