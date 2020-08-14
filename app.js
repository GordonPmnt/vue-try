let vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: "",
        firstname: 'Gordon',
        lastname: 'Preumont'
    },
    computed: {
        cls: function() {
            console.log('cls called')
            return this.success ? 'success' : 'error'
        },
        fullname: {
            get: function() {
                return `${this.firstname} ${this.lastname}`
            },
            set: function(value) {
                const nameParts = value.split(' ')
                this.firstname = nameParts[0]
                this.lastname = nameParts[1]
            }
        }
    }
})