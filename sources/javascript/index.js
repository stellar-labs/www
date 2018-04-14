'use strict'
import App from './vue/App.vue'
import router from './router.js'
window.addEventListener('load', () => {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
})
