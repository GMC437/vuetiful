'use strict';
Vue.component("task-list", {
    template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',
    data: function() {
        return {
            tasks: [
                { description: "Go for walk", completed: true},
                { description: "Clean room", completed: false},
                { description: "Cook dinner", completed: false},
                { description: "Read book", completed: true},
                { description: "Check emails", completed: false}
            ]
        }
    }
});

Vue.component("task", {
   template: "<li><slot></slot></li>" 
});

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