<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Articles from './components/AllArticles.vue'
import SingleArticle from './components/SingleArticle.vue'
import Navbar from './components/Navbar.vue'


export default {
  components: {
    'Articles':Articles,
    'SingleArticle':SingleArticle,
    'Navbar':Navbar,
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>
