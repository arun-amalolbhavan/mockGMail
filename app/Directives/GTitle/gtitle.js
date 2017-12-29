'use strict';

angular.module('myApp.mail')
    .directive('gTitle',[function(){

        var controller = [function(){
            var vm = this;
            vm.searchText = '';
        }]

        return{
            templateUrl: 'Directives/GTitle/gtitle.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        }
    }])