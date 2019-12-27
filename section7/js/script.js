var app = new Vue({
    el: '#app',
    data: {
        colors: [
            { name: 'Red', },
            { name: 'Green', },
            { name: 'Blue', },
        ],
    },
    watch: {
        colors: {
            // 配列、objectのwatchにはhandlerとdeep propertyの設定が必要
            handler: function (newValue, oldValue) {
                console.log('Update!')
                console.log(
                    // 配列、objectに対してwatcherを作成した時は、newとoldが値渡しでなく参照渡しとなるため、同じ参照を返すこととなりnewとoldが同じ値となるので注意が必要
                    'new: %s, old: %s',
                    // JSON.stringifyでjs objectをjsonに変換
                    // JSON.parseは、その逆でjsonをjs objectに変換
                    JSON.stringify(newValue, null, '\t'),
                    JSON.stringify(oldValue, null, '\t')
                )
            },
            deep: true,
            immediate: true,
        },
    },
})