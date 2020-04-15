import Vue from 'vue'
import PaginaA from './PaginaA.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(PaginaA),
}).$mount('#app')
