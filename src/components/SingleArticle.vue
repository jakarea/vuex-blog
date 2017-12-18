<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="articles">
					<h2 style="text:center"> Single Article</h2>
					<div class="article">
						<div class="title">{{ post.title }}</div>
						<div class="body">{{ post.body }}</div>
					</div>

					<div class="comments">Comments</div>
					<div class="comment" v-for="comment in comments">
						<div class="body">{{ comment.body }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
		    return {
		        id: this.$route.params.postId
		    }
		},
		created: function () {
		    this.$store.dispatch('post',this.id);
		    this.$store.dispatch('comments',this.id);
		},
		computed: {
    		...mapGetters(['comments','post'])
		},
		/*methods:{
		    ...mapActions(['post','comments'])
		},*/
	}
</script>

<style>
	.comment {
    padding: 10px 20px;
    font-style: italic;
}
.title {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 20px;
}
.comments{
	font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
}
</style>
