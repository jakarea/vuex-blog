<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<form>
				  <div class="form-group">
				    <label for="title">Post Title</label>
				    <input type="text" class="form-control" id="title" ref="title" placeholder="Enter title">
				    
				  </div>
				  <div class="form-group">
				   <label for="body">Body</label>
					<textarea class="form-control" id="body" ref="body" rows="3"></textarea>
				  </div>
				  <button type="submit" class="btn btn-primary" @click.prevent="getFormValues()">Submit</button>
				</form>
			</div>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';
	export default{
		created: function () {
		    this.$store.dispatch('posts');
		 },
		computed: {
    		posts(){
    			return this.$store.getters.posts;
    		}
		},
		methods: {
		    getFormValues () {
		      var title = this.$refs.title.value;
		      var body = this.$refs.body.value;
		      axios.post('http://jsonplaceholder.typicode.com/posts/', {
			    title: title,
			    body: body,
			    userId : 10
			  })
			  .then(function (response) {
			    console.log(response.data);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		    }
		}
	}
</script>