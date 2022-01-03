import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recherche from '../views/Recherche.vue'
import Categories from '../views/Categories.vue'
import Messages from '../views/Messages.vue'
import CategorieMessages from '../views/CategoriesMessages'
import NouvelleCategorie from "../views/NouvelleCategorie";
import EditCategorie from "../views/EditCategorie";
import MessageShow from "../views/MessageShow";
import MessageEdit from "../views/MessageEdit";
import Login from "../views/Login"

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
    path: '/nouvelle-categorie',
    name: 'nouvelle-categorie',
    component: NouvelleCategorie
  },
  {
    path: '/categorie-edit',
    name: 'categorie_edit',
    component: EditCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      }
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/message',
    name: 'message_show',
    component: MessageShow
  },
  {
    path: '/message-edit',
    name: 'message_edit',
    component: MessageEdit
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/a-propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated;
  isAuthenticated = !!localStorage.getItem('usertoken');

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
