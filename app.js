let vm = new Vue({
    el: '#app',
    data: {
        seconds: 0
    },
    methods: {
        
    },
    mounted() {
        this.$interval = setInterval(() => {
            this.seconds++
        }, 1000)
    },
    destroyed() {
        clearInterval(this.$interval)
    },
})