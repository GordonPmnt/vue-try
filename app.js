let vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: "",
    },
    computed: {
        cls: function() {
            console.log('cls called')
            return this.success ? 'success' : 'error'
        }
    }
})