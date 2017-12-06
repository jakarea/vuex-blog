<script>
// Example Dynamic Loading
const AllArticle = () => import(/* webpackChunkName: "posts" */ './AllArticle.vue')

export default {
  // template: '<AllArticle/>', // template mode
  // render: (h) => (<AllArticle/>), // JSX Mode
  render: (h) =>  h(AllArticle), // createElement or functional mode
  components: {
    AllArticle
  }
}
</script>
