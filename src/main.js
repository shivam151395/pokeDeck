import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Filter from './filter'
Vue.config.productionTip = false
Vue.use(Filter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
