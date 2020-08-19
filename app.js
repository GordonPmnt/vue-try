let vm = new Vue({
    el: '#app',
    data: {
        link: "https://www.google.be",
        normal: "normal",
        lazy: "lazy",
        keyboard: "keyboard",
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