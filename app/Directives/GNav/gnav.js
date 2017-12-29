'use strict';

angular.module('myApp.mail')
    .directive('gNav',[function(){

        var controller = [function(){
            var vm = this;
        }]

        return{
            templateUrl: 'Directives/GNav/gnav.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])