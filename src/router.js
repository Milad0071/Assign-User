import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import PhonePage from './components/PhonePage.vue'
import AssignUser from './components/AssignUser.vue'



Vue.use(VueRouter)



const routes = [

    {path: '/' , component : HomePage},
    {
      path: '/phone', 
      component : PhonePage,
      children : [

        {path : 'assignUser' , component : AssignUser}

      ]
    }
    
  ]

  const router = new VueRouter({

    routes,
    linkExactActiveClass : 'n-active'
  
  })



export default router