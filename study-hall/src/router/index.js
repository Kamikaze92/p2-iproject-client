import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from  '../views/Login.vue'
import Register from  '../views/Register.vue'
import Forum from  '../views/Forum.vue'
import FormCreate from  '../views/FormCreate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/create-thread',
    name: 'FormCreate',
    component: FormCreate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 // ? Navigation Guard
 router.beforeEach((to,from,next) => {
  if((to.name === 'Login' && localStorage.getItem("access_token")) || (to.name === 'Register' && localStorage.getItem("access_token"))){
    next('/')
  } else if (to.name === 'Home' && !localStorage.getItem("access_token")){
    next('/login')
  } else {
    next()
  }
})

export default router
