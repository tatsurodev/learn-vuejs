var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        message: '',
    },
    methods: {
        // $eventはvueで指定されているものなので$eとかではダメ
        clickHandler: function ($event, message) {
            this.message = message
            console.log($event)
        },
    },
})