System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppValidators;
    return {
        setters:[],
        execute: function() {
            AppValidators = (function () {
                function AppValidators() {
                }
                AppValidators.cannotContainSpaces = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpaces: true };
                    return null;
                };
                AppValidators.invalidEmail = function (control) {
                    var regexp = /\S+@\S+\.\S+/;
                    if (!regexp.test(control.value))
                        return { invalidEmail: true };
                    return null;
                };
                return AppValidators;
            }());
            exports_1("AppValidators", AppValidators);
        }
    }
});
//# sourceMappingURL=app.validators.js.map