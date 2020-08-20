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

let vm = new Vue({
    el: '#app',
    components: { message, newmessage, counter },
    data: {
        message: "Hey there!"
    },
    methods: {

    }
})