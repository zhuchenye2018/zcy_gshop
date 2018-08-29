import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path:"/msite",
      component:Msite,
      meta:{
         isShowFooter:true
      }
    },
    {
       path:"/search",
      component:Search,
      meta:{
        isShowFooter:true
      }
    },
    {
       path:"/order",
      component:Order,
      meta:{
        isShowFooter:true
      }
    },
    {
       path:"/profile",
      component:Profile,
      meta:{
        isShowFooter:true
      }
    },
    {
       path:"/login",
       component:Login
    },
    {
      path:"/",
      redirect:"/msite"
    },
  ]
})
