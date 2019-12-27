Vue.component('button-counter', {
    // component内のdataはobjectを返す関数である必要がある。それによりscopeがcomponent毎に限定され、各々のdataを保持できる。無名関数でなく、arrow関数だとthisがwindow objectに固定されてしまうので使わないこと
    data: function () {
        return {
            count: 0,
        }
    },
    // templateは単一の要素である必要がある
    template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>',
})

var app = new Vue({
    el: '#app',
})