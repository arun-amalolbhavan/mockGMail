'use strict';

angular.module('myApp.mail')
    .directive('gPagination',[function(){

        var controller = [function(){
            var vm = this;
        }]

        return{
            templateUrl: 'view/pagination/pagination.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])