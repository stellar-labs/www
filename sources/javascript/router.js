'use strict'
import DefaultComponent from './vue/components/Default.vue'
import HomeComponent from './vue/components/Home.vue'
import AboutComponent from './vue/components/About.vue'
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '*',
      component: DefaultComponent
    },
  ]
})
