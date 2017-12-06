<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="articles">
					<h2 style="text:center"> All Articles</h2>
					<div class="article" v-for="post in posts">
						<div class="title"><router-link :to="'/posts/'+ post.id">{{ post.title }}</router-link></div>
						<div class="body">{{ post.body }}</div>
						<div class="link">
							<router-link :to="'/posts/'+ post.id">Read More</router-link>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		created: function () {
		    this.$store.dispatch('posts');
		 },
		computed: {
    		...mapGetters(['posts'])
		},
		methods:{
		    ...mapActions(['posts'])
		},
	}
</script>

<style>
	.article{
		margin:50px 20px;
	}
	.title {
	    font-weight: 700;
	    font-size: 18px;
	    padding-bottom: 13px;
	}

	.link{
		float:right;
		font-weight: 700;
	}
</style>	