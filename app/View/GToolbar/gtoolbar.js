'use strict';

angular.module('myApp.mail')
    .directive('gToolbar',[function(){

        var controller = [function(){
            var vm = this;
        }]

        return{
            templateUrl: 'view/gtoolbar/gtoolbar.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])