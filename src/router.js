import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Transactions from './views/Transactions'
import Blocks from './views/Blocks'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
    routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/blocks',
      name: 'Blocks',
      component: Blocks
    },

      // otherwise redirect to home
    { path: '*', redirect: '/' }
    ]
})
