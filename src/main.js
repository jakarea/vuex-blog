import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueRouter from 'vue-router'

import AllArticles from './components/AllArticles.vue';
import SingleArticle from './components/SingleArticle.vue';


const routes = [
  { path: '/', component: AllArticles},
  { path: '/posts', component: AllArticles},
  { path: '/posts/:postId', component: SingleArticle},
  { path: '*', component: { template: '<h1>Page not found</h1>'}}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,router,
  render: h => h(App)
})
