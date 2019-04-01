import Vue from 'vue'
import Router from 'vue-router'
import movie from './movie';
import mine from './mine';
import cinema from './cinema';
Vue.use(Router)

export default new Router({
  routes: [
    movie,
    mine,
    cinema
    
  ]
})
