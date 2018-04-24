'use strict';
new Vue ({
    el: "#root",
    data: {
        newName: '',
        names:["Peter", "Tony", "Steve"],
        title: "cool",
        tmp: false,
        tasks: [ 
            { description: "Go for walk", completed: true},
            { description: "Clean room", completed: false},
            { description: "Cook dinner", completed: false},
            { description: "Read book", completed: true},
            { description: "Check emails", completed: false}
        ]
    },
    computed:{
      
        reversedMessage: function() {
            return this.title.split('').reverse().join('');
        },
        incompleteTasks: function() {
            return this.tasks.filter(task => !task.completed);
        }
        
    },
    methods: {
        addName: function() {
            this.names.push(this.newName);
            this.newName = '';
        },
        toggleVar: function() {
            this.tmp = true;
        }
    }
}) 

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