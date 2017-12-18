<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import CantShare from './components/CantShare.vue'
import Articles from './components/AllArticles.vue'
import SingleArticle from './components/SingleArticle.vue'
import Navbar from './components/Navbar.vue'
import BooksPage from './components/BooksPage'


export default {
  components: {
    'CantShare':CantShare,
    'Articles':Articles,
    'SingleArticle':SingleArticle,
    'Navbar':Navbar,
    BooksPage
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>
