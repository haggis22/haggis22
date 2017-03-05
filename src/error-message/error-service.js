(function (mod) {

    "use strict";

    mod.factory('h22.errorService', [

        function () {

            var NO_CONNECTION = -1;

            return {

                error: null,
                addError: addError,
                clearError: clearError

            };

            function addError(header, error) {

                this.error = parse(header, error);

            }

            function clearError() {
                this.error = null;
            }


            function parse(header, error) {

                var parsedError = { header: header, errors: [] };

                if (error) {

                    if (error.data) {
                        parsedError.errors.push(error.data);
                    }
                    else if (error.status === NO_CONNECTION) {
                        parsedError.errors.push("Could not connect");
                    }
                    else {
                        parsedError.errors.push(error);
                    }

                }
                else {
                    parsedError.errors.push("Unknown error");
                }

                // we wrap this in an outer error object so that it gets passed in the event args
                return parsedError;

            }


        }

     ]);


})(angular.module('haggis22'));


