(function () {
    'use strict';

    angular.module('APP-NAME.config', ['APP-NAME.constants'])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$httpProvider', '$logProvider', '$compileProvider', 'RestangularProvider', 'DEBUG_ENABLED', 'API_URL'];

    function config($urlRouterProvider, $httpProvider, $logProvider, $compileProvider, RestangularProvider, DEBUG_ENABLED, API_URL) {

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $urlRouterProvider.otherwise('/');

        $logProvider.debugEnabled(DEBUG_ENABLED);

        $compileProvider.debugInfoEnabled(DEBUG_ENABLED);

        RestangularProvider.setBaseUrl(API_URL);

        RestangularProvider.setRequestSuffix('/');

    }

}());
