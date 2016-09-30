module.exports = function(router){
	router.transitionOnLoad = true;
	router.map({
		'/index': {
			component: require('./components/index.vue'),
			name: 'index',
			subRoutes: {

			}
		},
		'/404': {
			component: require('./404.vue'),
			name: '404'
		},
		'/tabs': {
			component: require('./components/tabs.vue'),
			name: 'tabs'
		},
		'/list': {
			component: require('./components/list.vue'),
			name: 'list'
		}
	});
};