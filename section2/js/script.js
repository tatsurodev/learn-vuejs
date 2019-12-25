var app = new Vue({
    el: '#app',
    data: {
        now: '',
    },
    methods: {
        onclick: function () {
            // alert('onclick!')
            // thisでdataへaccess
            this.now = new Date().toLocaleString()
        }
    }

})