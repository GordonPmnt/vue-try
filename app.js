//globally created
Vue.directive('hey', {
    bind: function (el, binding, vnode) {
        console.log(el, binding)
        el.value = binding.value
    },
    update: function (el, binding, vnode, oldvnode) {
        console.log(el, binding)
        el.value = binding.value  
    },
})

let vm = new Vue({
    el: '#app',
    data: {
        link: "https://www.google.be",
        normal: "normal",
        lazy: "lazy",
        keyboard: "keyboard",
        custom: "custom",
    },
    directives: {
        //if you want to create directives only in this vue
    },
    methods: {
        clicked() {
            console.log("click")
        },
        pressed() {
            alert("you pressed SPACE")
        },
        clickOne() {
            alert(1)
        },
        clickTwo() {
            alert(2)
        }
    }
})