// DOM elements
const titleElement = document.querySelector(".title");
const clickMeElement = document.querySelector(".click-me");
const tooltipElement = document.querySelector(".tooltip-text");

// Event listeners
clickMeElement.addEventListener("click", getRandomColor);
document.addEventListener("DOMContentLoaded", getRandomColor);
titleElement.addEventListener("click", copyToClipBoard);

// Functions
function getRandomColor() {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    titleElement.innerHTML = "#" + randomColor;
}

function copyToClipBoard() {
    selectText(titleElement);
    const defaultTooltip = tooltipElement.innerHTML;
    tooltipElement.innerHTML = "Copied to clipboard";
    document.execCommand("copy");
    setTimeout(() => {
        tooltipElement.innerHTML = defaultTooltip;
    }, 3000);
}

function selectText(el) {
    // https://html-online.com/articles/select-div-content-text-one-click-javascript/
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(el);
        window.getSelection().addRange(range);
    }
}
