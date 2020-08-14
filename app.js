let vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: "",
        firstname: 'Gordon',
        lastname: 'Preumont'
    },
    computed: {
        cls() {
            console.log('cls called')
            return this.success ? 'success' : 'error'
        },
        fullname: {
            get() {
                return `${this.firstname} ${this.lastname}`
            },
            set(value) {
                const nameParts = value.split(' ')
                this.firstname = nameParts[0]
                this.lastname = nameParts[1]
            }
        }
    },
    watch: {
        fullname(value) {
            console.log(value)
        }
    },
})