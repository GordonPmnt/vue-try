class NotificationsStore {
    state = {
        count: 0
    }
    increment() {
        this.state.count++
    }
    decrement() {
        this.state.count--
    }
}

var notifications_store = new NotificationsStore()

var Counter = {
    data() {
        return { 
            state: notifications_store.state 
        }
    },
    template: `
        <div>
            <p>{{ state.count }}</p>
        </div>
    `
};

var Notifications = {
    methods: {
        addNotification() {
            notifications_store.increment()
        }
    },
    components: { Counter },
    template: `
        <div>
            <button @click="addNotification">Add</button>
            <h1>Counter:</h1>
            <counter></counter>
        </div>
    `,
};

new Vue({
    el: '#app',
    components: { Notifications, Counter },
    data: {

    },
})