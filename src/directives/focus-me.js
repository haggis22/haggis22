(function (mod) {

    "use strict";

    mod.directive('h22FocusMe', ['$timeout', function ($timeout) {
        return {
            link: function (scope, element, attrs) {
                scope.$watch(attrs.h22FocusMe, function (value) {
                    if (value) {
                        // the timeout will give any container time to appear
                        $timeout(function () {
                            element[0].focus();
                        }, 10);
                    }
                });
            }
        };

    } ]);


})(angular.module('haggis22'));


