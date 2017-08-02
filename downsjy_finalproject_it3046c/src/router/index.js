import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About/About'
import Author from '@/components/Author/Author'
import Materials from '@/components/Materials/Materials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Author',
      name: 'Author',
      component: Author
    },
    {
      path: '/Materials',
      name: 'Materials',
      component: Materials
    }
  ]
})
