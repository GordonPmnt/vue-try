//global filters
Vue.filter('capitalize', value => value.toUpperCase())
Vue.filter('reverse', value => value.split('').reverse().join(''))

var addstring = (value, param) => value + param;

let vm = new Vue({
    el: '#app',
    data: {
        message: "Hey there!"
    },
    // local filters
    filters: {
        addstring
    }
})