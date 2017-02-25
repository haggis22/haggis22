(function (mod) {

    "use strict";

    mod.directive('h22AjaxMessage', function () {
        return {
            // we want to create an isolate scope so that we can have multiple instances of this directive on a page
            scope: {},
            restrict: 'E',
            replace: true,
            templateUrl: 'ajax-message-template.html',
            link: function (scope, element, attributes) {

                attributes.$observe('message', function (value) {
                    scope.message = value;
                });

                // scope.message = attributes.message;

            }
        }
    });


})(angular.module('haggis22'));


