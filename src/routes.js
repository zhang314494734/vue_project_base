import Index from './components/Index.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'


const routes = [{
	path: '/',
	component: Index
}, {
	path: '/about',
	component: About
}, {
	path: '/login',
	component: Login
}]

export default routes;