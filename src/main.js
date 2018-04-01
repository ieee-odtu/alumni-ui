// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import Router from './routes'
import Store from './store'

import config from './config'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  store: Store,
  created () {
    this.isLoggedIn = this.$store.state.token !== undefined
  },
  methods: {
    getAxios () {
      if (this.$root.isLoggedIn) {
        return axios.create({
          baseURL: config.api_uri,
          headers: {
            'Authorization': this.$store.state.token
          }
        })
      } else {
        return axios.create({
          baseURL: config.api_uri
        })
      }
    }
  },
  render: h => h(App)
})
