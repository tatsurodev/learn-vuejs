var app = new Vue({
    el: '#app',
    data: {
        message: '',
    },
    methods: {
        clickHandler: function () {
            alert('Clicked!')
        },
    },
})