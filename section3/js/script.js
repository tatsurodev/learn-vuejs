var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: [],
    },
    methods: {
        addItem: function (event) {
            // alert()
            // newItemが空欄なら処理中止
            if (this.newItem === '') return
            var todo = {
                item: this.newItem,
            }
            this.todos.push(todo)
            this.newItem = ''
        }
    }
})