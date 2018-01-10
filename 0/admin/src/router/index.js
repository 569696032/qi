import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/loginRegist/login'
import Index from '@/components/Adminindex/Adindex'
import Gaikuo from '@/components/Content/gaikuo'
import Persoin from '@/components/Content/persoin'
import information from '@/components/Content/information'
import Icon from '@/components/Content/Icon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {path:"gaikuo",component:Gaikuo},
        {path:"persoin",component:Persoin},
        {path:'information',component:information},
        {path:'Icon',component:Icon}
      ]
    }
    
  ]
})
