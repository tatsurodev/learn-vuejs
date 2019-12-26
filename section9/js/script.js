var app = new Vue({
    el: '#app',
    data: {
        // htmlにhard codeすると可読性が下がる時にobject dataをclassにdata bindingする
        classObject: {
            large: true,
            'text-danger': true,
        }
    }
})