import Vue from 'vue';
import Vuex from 'Vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict:true,
	state:{
		posts: [],
		post:{},
		comments:[]
	},

	getters:{
		posts : state =>{
			return state.posts
		},
		post : state =>{
			return state.post
		},
		comments : state =>{
			return state.comments
		},
		search(state) {
      return keyword => state.posts.filter(post =>{
        return post.title.toLowerCase().includes(keyword.toLowerCase())
      });
    }
	},

	mutations:{
		posts:(state,payload)=>{
			state.posts = payload;
		},
		post:(state,payload)=>{
			state.post = payload;
		},
		comments:(state,payload)=>{
			state.comments = payload;
		},
		// searchPost:(state,keyword)=>{
		// 	state.posts = state.posts.filter(post => {
		// 		console.log(keyword);
    //     return post.title.toLowerCase().includes(keyword.toLowerCase())
    //   })
		// },
	},
	actions:{
		posts:context=>{
			axios.get(`http://jsonplaceholder.typicode.com/posts`)
				.then(function (response) {
					context.commit('posts',response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
			},

		post:(context,id)=>{
			axios.get(`http://jsonplaceholder.typicode.com/posts/`+id)
				.then(function (response) {
					//console.log(response.data)
					context.commit('post',response.data);
				})
				.catch(function (error) {
					console.log('errror pos: ' +error);
				});
			},

		comments:(context,id)=>{
			axios.get(`http://jsonplaceholder.typicode.com/comments?postId=`+id)
				.then(function (response) {
					console.log(response.data)
					context.commit('comments',response.data);
				})
				.catch(function (error) {
					console.log('errror com: ' +error);
				});
			},
			searchPost : (context,payload)=>{
				context.commit('searchPost',payload);
			}
	}
})
