import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

// routes
const List = () => import("./views/List");

const routes = [
  { path: '/list', component: List },
]

const router = new VueRouter({
  routes
})

// store
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// vue
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
