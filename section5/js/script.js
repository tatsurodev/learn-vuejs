// 他のcomponent等でも使用するfilterの登録にglobal filterは便利
Vue.filter('numberFormat', function (value) {
    return value.toLocaleString()
})

var app = new Vue({
    el: '#app',
    data: {
        price: 29800,
    },
    // filters: {
    //     numberFormat: function (value) {
    //         return value.toLocaleString()
    //     }
    // },
})