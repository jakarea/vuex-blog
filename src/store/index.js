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
		}
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
			}
	}
})