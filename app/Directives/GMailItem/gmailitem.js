'use strict';

angular.module('myApp.mail')
    .directive('gMailItem',[function(){

        var controller = ['$scope',function($scope){
            var vm = this;

            //Get the Name of the sender from the from email. eg: '<Arun A> arun.a@gmail.com'
            vm.getFromName = function()
            {
                return vm.mailItem.from.substring(vm.mailItem.from.lastIndexOf("<")+1,vm.mailItem.from.lastIndexOf(">"));
            }

            // Get the icon for selected and non selected item
            vm.getStarIcon = function ()
            {
                if(vm.mailItem.flags.starred)
                    return "fa-star star-color";
                else
                    return "fa-star-o";
            }

            // Get the icon for selected and non selected item
            vm.getBookmarkIcon = function ()
            {
                if(vm.mailItem.flags.important)
                    return "fa-bookmark star-color";
                else
                    return "fa-bookmark-o";
            }

            //Toggle starred option for the mail item
            vm.toggleStar = function($event)
            {
                if(vm.mailItem.flags.starred)
                    vm.mailItem.flags.starred = false
                else
                    vm.mailItem.flags.starred = true;

            }

            // Toggle bookmark option for the mail item
            vm.toggleBookmark = function()
            {
                if(vm.mailItem.flags.important)
                    vm.mailItem.flags.important = false
                else
                    vm.mailItem.flags.important = true;
            }

            // Mark item selection
            vm.itemSelected = false;

            $scope.$watch('vm.itemSelected', function(newValue, oldValue){
                vm.mailItem.flags.selected = newValue;
            });

        }]

        return{
            templateUrl: 'Directives/GMailItem/gmailitem.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            scope:{
                mailItem:'=mail'
            }
        }
    }])