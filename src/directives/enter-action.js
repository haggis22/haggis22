(function (mod) {

    "use strict";

    mod.directive('h22EnterAction', [ function () {
        return function (scope, element, attrs) {

            element.bind("keydown keypress", function (event) {
                
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.h22EnterAction);
                    });

                    event.preventDefault();
                }
            });
        };
        
    }]);

})(angular.module('haggis22'));


