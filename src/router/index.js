import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AnimationPage from '@/components/AnimationPage'
import InputPage from '@/components/InputPage'
import ChartPage from '@/components/ChartPage'

Vue.use(Router)

//define routes and page titles
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {title: 'Vue.js Demo'}   
    },{
      path: '/animation',
      name: 'Animations',
      component: AnimationPage,
      meta: {title: 'Vue.js Demo | Animations'}   
    },{
      path: '/input',
      name: 'Inputs',
      component: InputPage,
      meta: {title: 'Vue.js Demo | Inputs'}      
    },{
      path: '/chart',
      name: 'Chart',
      component: ChartPage,
      meta: {title: 'Vue.js Demo | Charts'}      
    }
  ]
})

//use titles for each route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router