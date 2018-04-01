import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from './pages/HomePage.vue';
import AlumniPage from './pages/AlumniPage.vue';
import AboutPage from './pages/AboutPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: HomePage},
		{path: '/alumni', component: AlumniPage},
		{path: '/alumni/:alid', component: AlumniPage},
		{path: '/about', component: AboutPage},
		{path: '/register', component: RegisterPage},
		{path: '/login', component: LoginPage},
	]
});
