let message = {
    props: ['message', 'other'],
    template: `
        <p>Message: {{ message }} - {{ other }}</p>
    `,
}

let newmessage = {
    props: {
        message: String,
        comment: { type: String, default: 'Default comment' },
        etc: [String, Number]
    },
    template: `
        <p>Message: {{ message }} - {{ comment }}</p>
    `,
}

let counter = {
    props: {
        start: { type: Number, default: 0 }
    },
    template: `
        <div>
            <p>{{ total }}</p>
            <button @click="increment" >+1</button>
        </div>
    `,
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment() {
            this.num++
        }
    },
    computed: { 
        total() {
            return this.start + this.num
        }
    }
}

let warning = {
    props: {
        alert: Boolean,
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    template: `
        <div>
            <p v-if="alert">Warning!</p>
            <button v-if="alert" @click="close">Hide alert...</button>
        </div>
    `
}

let formUser = {
    props: {
        user: Object,
    },
    data() {
        return { 
            userLocal: { ...this.user } // if we directly modify user, it changes the state in the parent (by reference), which is often cool, but not here for the form
        }
    },
    methods: {
        save() {
            this.$emit('save', this.userLocal)
        }
    },
    template: `
        <form @submit.prevent="save">
            <p><slot /></p>
            <label for="firstname">Firstname: </label>
            <input type="text" name="firstname" v-model="userLocal.firstname"></input>
            <p>{{ user }}</p>
            <button type="submit">Submit</button>
        </form>
    `,
    mounted() {
        console.log(this.$slots) 
    }
}

let vm = new Vue({
    el: '#app',
    components: { message, newmessage, counter, warning, formUser },
    data: {
        user: {
            firstname: 'Gordon'
        },
        message: "Hey there!",
        alert: false,
    },
    methods: {
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        },
        save(value) {
            this.user = { ...value }
        }
    }
})