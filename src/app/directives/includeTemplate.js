'use strict';

function includeTemplate($http, $compile, $templateCache) {
    return {

        templateUrl: function ($element, $attrs) {
            return $attrs.templateurl;
        },
        restrict: 'EA'

    }
}