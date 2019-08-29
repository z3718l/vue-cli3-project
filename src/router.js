import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 注意：这里routes单词不要写错
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  }]
})
