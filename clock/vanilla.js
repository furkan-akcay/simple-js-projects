document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const container = document.getElementById("container");
        let now = new Date();
        hour = format(now.getHours());
        minute = format(now.getMinutes());
        second = format(now.getSeconds());
        const clock = `<span>${hour}</span>:<span>${minute}</span>:<span>${second}</span>`;
        container.innerHTML = clock;
    }, 1000);

    function format(num) {
        return num < 10 ? "0" + num : num;
    }
});
