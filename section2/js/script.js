var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        url: 'https://jp.vuejs.org/',
        toggle: true,
        languages: ['Javascript', 'Ruby', 'Python',]
    },
    methods: {
        clickHandler: function () {
            this.message = 'Clicked!'
        }
    }
})