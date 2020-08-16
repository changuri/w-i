import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Invitation from '../views/Invitation.vue'
import Call from '../views/Call.vue'
import Gallery from '../views/Gallery.vue'
import Location from '../views/Location.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

  // const originalReplace = VueRouter.prototype.replace;
  // VueRouter.prototype.replace = function replace(location) {
  //   return originalReplace.call(this, location).catch(err => err);
  // };

  const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
  }


  const routes = [
  {
    path: '/',
    name: '홈',
    component: Home
  },
  {
    path: '/invitation',
    name: '초대장',
    component: Invitation
  },
  {
    path: '/call',
    name: '전화',
    component: Call
  },
  {
    path: '/gallery',
    name: '갤러리',
    component: Gallery
  },
  {
    path: '/location',
    name: '위치',
    component: Location
  },
  {
    path: '/comments',
    name: '메세지',
    component: Comments
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
