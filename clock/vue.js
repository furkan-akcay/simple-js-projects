new Vue({
    el: "#app",
    data: {
        hour: "",
        minute: "",
        second: "",
    },
    methods: {
        timer() {
            const time = new Date();
            this.hour = time.getHours();
            this.minute = time.getMinutes();
            this.second = time.getSeconds();
        },
    },
    created() {
        setInterval(this.timer, 1000);
    },
});
