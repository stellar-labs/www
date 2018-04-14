'use strict'
import DefaultComponent from './vue/components/Default.vue'
import HomeComponent from './vue/components/Home.vue'
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '*',
      component: DefaultComponent
    }
  ]
})
