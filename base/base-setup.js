(function () {
    'use strict';

    var app = angular.module('APP-NAME.base', []);



	/*~~~~~~~~~~~~~~~~~~~~~~*
	 *    Config Block      *
	 *~~~~~~~~~~~~~~~~~~~~~~*/

    app.config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        // add the needed routes to the state provider
        $stateProvider.state('base', {
            url: '',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/base/base.html'
                },
                'header@base': {},
                'footer@base': {}
            }
        });

    }

	/*~~~~~~~~~~~~~~~~~~~~~~*
	 *      Run Block       *
	 *~~~~~~~~~~~~~~~~~~~~~~*/

	app.run(run);

	run.$inject = ['$log', '$rootScope', '$state', '$stateParams'];

    function run($log, $rootScope, $state, $stateParams) {


        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) { // jshint ignore:line
            $log.error('Error while changing state', arguments);
        });

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class='{ active: $state.includes('contacts.list') }'> will set the <li>
        // to active whenever 'contacts.list' or one of its descendants is active.
        $log.debug('Setting $state and $stateParams on $rootScope');
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function ($event, toState, toParams, fromState) {
            if(!fromState.name) {
                $rootScope.$previousState = {name: 'base.home', isRoot: true};
            } else {
                $rootScope.$previousState = fromState;
            }
        });
    }

})();
