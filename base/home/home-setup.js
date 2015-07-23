(function () {
    'use strict';

    var app = angular.module('APP-NAME.home', ['ui.router']);

    app.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('base.home', {
            url: '/',
            views: {
                'main@base': {
                    templateUrl: 'app/home/home.html'
                },
                'footer@base': {}
            }
        });

    }]);
})();
