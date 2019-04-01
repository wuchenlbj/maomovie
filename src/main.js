import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import stores from './stores/index'

Vue.config.productionTip = false

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#app')
