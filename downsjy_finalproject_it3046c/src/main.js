import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  render: h => h(App),
  components: { App }
})
