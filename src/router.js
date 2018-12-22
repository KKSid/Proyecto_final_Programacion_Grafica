import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import form from './views/Formulario.vue'
import menu from './views/Menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Formulario',
      name: 'Formulario',
      component: form
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: menu
    },

  ]
})
