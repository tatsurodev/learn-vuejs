var helloComponent = {
    template: '<p>Hello</p>',
}

var app = new Vue({
    el: '#app',
    components: {
        // component名はケバブケースでないとダメ
        'hello-component': helloComponent,
    },
})