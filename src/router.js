import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Transactions from './views/Transactions'
import transactions from './views/Blocks'
import BlockDetails from './views/BlockDetails'


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
      path: '/blocks',
      name: 'transactions',
      component: transactions
    },
    {
      path: '/blocks/:id',
      name: 'BlockDetails',
      component: BlockDetails
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    },


      // otherwise redirect to home
    { path: '*', redirect: '/' }
    ]
})
