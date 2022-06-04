import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Books
    }
  ]
})
