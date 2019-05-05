import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

    {
        path: '/',
        component: () => import('./views/Home.vue')
      },
    {
      path: '/account',
      component: () => import('./views/AccountPage.vue'),
      props: true,
      meta:{
        requiresAuth: true
      }
      
    },
    {
      path: '/account/updateInformation',
      component: ()=> import('./views/UpdateAccount.vue'),
      meta:{
        requiresAuth: true
      }
    },

    {
      path: '/account/orders',
      component: ()=>import('./views/OrderHistory.vue'),
      meta:{
        requiresAuth: true
      },
      children:[
        {
          path: '',
          component: ()=>import('./components/OrderList.vue'),
          props: true,
          meta:{
            requiresAuth: true
          },
        },
        {
          path: ':id',
          component: ()=>import('./components/OrderDisplay.vue'),
          props: true,
          meta:{
            requiresAuth: true
          },
        }
      ]
    },


    {
      path: '/account/addressBook',
      component: ()=>import('./views/AddressBook.vue')
    },

    {
      path: '/account/reviews',
      component: () => import('./views/ReviewHistory.vue')
    },

    {
      path: '/cart',
      component: ()=>import('./views/Cart.vue')
    },
    { path: '*', component: ()=> import('./views/NotFound.vue') },  

  ]
})
