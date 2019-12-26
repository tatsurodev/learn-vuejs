var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: '',
    },
    watch: {

    },
    created: function () {
        this.keyword = 'Javascript'
        this.getAnswer()
    },
    methods: {
        getAnswer: function () {
            if (this.keyword === '') {
                this.items = null
                return
            }
            this.message = 'Loading...'
            // axios内でthis.dataにaccessできるようthisを変数に格納
            var vm = this
            // axios用query paramsを用意
            var params = {
                page: 1,
                per_page: 20,
                query: this.keyword,
            }
            axios
                .get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                }).finally(function () {
                    vm.message = ''
                })
        },
    },
})