<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="articles">
					<h2 style="text-align:right"> Add New Post</h2>
					<input v-model="message" placeholder="edit me">
					<p>Message is: {{ message }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		
		computed: {
    		
		}
	}
</script>

<style>
	
</style>	