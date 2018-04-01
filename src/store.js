import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
    token: undefined
	},
	mutations: {
		setJwt(store, token) {
			store.token = token;
		}
	},
	plugins: [createPersistedState()]
});
