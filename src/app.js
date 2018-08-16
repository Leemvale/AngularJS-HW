angular
    .module('myApp', [])
    .controller('parentCtrl', function () {
        this.click = function (btn) {
            console.log(`${btn} was cliked`)
        };
    })
    .controller('childCtrl', function () {
    })
    .directive('container', function () {
        return {
            restrict: 'E',
            controller: 'parentCtrl',
            controllerAs: 'parent',

        }
    })
    .directive('myButton', function () {
        return {
            controller: 'childCtrl',
            controllerAs: 'child',
            bindToController: {
                click: '&onClick',
                number: '<'
            },
            scope: true,
            restrict: 'EA',
            transclude: true,
            template: '<button ng-click="child.click()">my button <span ng-transclude></span> </button>',
        }
    });