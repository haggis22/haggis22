(function (mod) {

    "use strict";

    mod.directive('h22EscapeAction', ['$document',
        function ($document) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    $document.bind("keydown keypress", function (event) {

                        if (event.which === 27) {
                            scope.$apply(function () {
                                scope.$eval(attrs.escapeAction);
                            });

                            event.preventDefault();
                        }
                    });

                }  // link
            };
        }  // 
    ]);

})(angular.module('haggis22'));


