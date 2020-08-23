import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
// import Invitation from '../views/Invitation.vue'
// import Call from '../views/Call.vue'
// import Gallery from '../views/Gallery.vue'
// import Location from '../views/Location.vue'
// import Comments from '../views/Comments.vue'

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
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
