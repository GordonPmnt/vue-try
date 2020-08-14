let vm = new Vue({
    el: '#app',
    data: {
        seconds: 0
    },
    methods: {
        
    },
    mounted() {
        setInterval(() => {
            this.seconds++
        }, 1000)
    },
})