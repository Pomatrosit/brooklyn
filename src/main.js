import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import YmapPlugin from 'vue-yandex-maps'

Vue.config.productionTip = false

const settings = {
  apiKey: 'dbdccdc4-2977-40f2-9cc3-07dc75ba9931',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
