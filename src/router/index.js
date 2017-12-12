import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../Main.vue'
import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import BookDetail from '../BookDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{name: 'Home', path: 'home', component: Home},
        {name: 'Categories', path: 'explorer', component: Explorer},
        {name: 'ShoppingCart', path: 'cart', component: Cart},
        {name: 'Me', path: 'me', component: Me}]
    },
    {name: 'BookDetail', path: '/books/:id', component: BookDetail}
  ],
  linkActiveClass: 'active'
})
