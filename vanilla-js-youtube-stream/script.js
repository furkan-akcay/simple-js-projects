const timeDiv = document.querySelector(".time");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const video = document.querySelector(".video");

const deflt = "https://www.youtube.com/watch?v=5qap5aO4i9A";
setVideo(deflt);

btn.addEventListener("click", render);
input.addEventListener("change", render);

function render(event) {
    event.preventDefault();
    setVideo(input.value);
}

setInterval(time, 1000);

function setVideo(url) {
    const { id } = getVideoId(url);
    video.setAttribute("src", `https://www.youtube.com/embed/${id}`);
}

function time() {
    const now = new Date();
    const span = `${format(now.getHours())}:${format(now.getMinutes())}`;
    timeDiv.innerHTML = span;
}

function format(str) {
    return str < 10 ? `0${str}` : str;
}
