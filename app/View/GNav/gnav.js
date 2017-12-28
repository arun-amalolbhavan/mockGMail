'use strict';

angular.module('myApp.mail')
    .directive('gNav',[function(){

        var controller = [function(){
            var vm = this;
        }]

        return{
            templateUrl: 'view/gnav/gnav.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])