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

let vm = new Vue({
    el: '#app',
    components: { message, newmessage, counter, warning },
    data: {
        message: "Hey there!",
        alert: false,
    },
    methods: {
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        }
    }
})