'use strict';
const store = new Vuex.Store({
	state: {
		songs: [{
				name: " Despacito "
			},
			{
				name: " Will You! "
			},
			{
				name: " You are not alone ! "
			},
		]
	},
	getters: {
		getAllSongs: state => {
			return state.songs;
		}
	},
	mutations: {
		addSong: function (state, name) {
			console.log(`Will add a song called ${name}`);
		}
	},
	actions: {
		addSong: function (context) {
			context.commit(" addSong ", " Rock Star ");
		}
	}
});