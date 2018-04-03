'use strict'
import App from './vue/App.vue'
window.addEventListener('load', () => {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
