let vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        link: 'https://www.google.be',
        success: true,
        persons: ["Jim", "Paul", "Elena", "Kate"],
        style: { fontWeight: 'bold' },
        className: 'checked',
    },
    methods: {
        switchMe: function() {
            this.success = !this.success
        },
        styleSwitch: function() {
            if(this.success) {
                return { 
                    background: 'green',
                    color: 'white',
                }
            }
            return { 
                background: 'red',
                color: 'white',
            }
        }
    }
})