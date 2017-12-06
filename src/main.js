import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import CantShare from './components/CantShare.vue';
import AllArticles from './components/AllArticles.vue';
import SingleArticle from './components/SingleArticle.vue';


Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: AllArticles, name: 'home',alias: '/posts'},
  { path: '/posts/:postId', component: SingleArticle},
  { path: '/cant-share', component: CantShare},
  { path: '*', component: { template: '<h1>Page not found</h1>'}}
];


const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

new Vue({
  el: '#app',
  store,router,
  render: h => h(App)
})
