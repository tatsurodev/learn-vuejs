var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
    },
    // 依存関係が変化しない限りcached
    // getter, setter両方可
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
    },
    // not cached
    // getterのみ
    methods: {
        reversedMessageMethod: function () {
            return this.message.split('').reverse().join('')
        },
    },
})