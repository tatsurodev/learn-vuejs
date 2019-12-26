var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: '',
    },
    watch: {
        keyword: function (newKeyword, oldKeyword) {
            // console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            // keywordに変化がある度loadashで間引いた関数を実行
            this.debouncedGetAnswer()
        },
    },
    created: function () {
        // this.keyword = 'Javascript'
        // this.getAnswer()
        // _.debounce(間引く関数, 時間)
        // loadashで新たに間引いた関数を返す、グローバル変数debouncedGetAnswerにその関数を格納
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.keyword === '') {
                // formが空で前の検索結果のitemsを空に、messageも初期化
                this.items = null
                this.message = ''
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