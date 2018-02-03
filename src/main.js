import Vue from 'vue'

import Vonic from 'vonic'
// Page Components

import store from './vuex'
// Routes
import routes from './routes'

import {
	checkLogin
} from './common'

window.log = console.log;

Vue.use(Vonic.app, {
	routes: routes,
	store: store
})


window.onload = function() {
	log('页面加载完成！！！！！！’‘');
	checkLogin();
	$router.beforeEach((to, from, next) => {
		log('beforeEach');
		checkLogin();
		next()
	})
}