(function (mod) {

    "use strict";

    mod.directive('h22ErrorMessage', ['h22.errorService',

        function (errorService) {

            return {

                restrict: 'E',
                replace: true,
                templateUrl: 'error-message-template.html',

                link: function ($scope, $element, $attributes) {

                    $scope.errorService = errorService;

                    $element.draggable();

                }

            };

        }

     ]);


})(angular.module('haggis22'));


