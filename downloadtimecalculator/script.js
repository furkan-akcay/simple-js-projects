sizeTypeList = ["kb", "mb", "gb"]
speedTypeList = ["kb/sec", "mb/sec", "gb/sec"]

sizeInput = document.getElementById("size")
speedInput = document.getElementById("speed")
calculateBtn = document.querySelector(".calculate")
sizeSelect = document.getElementById("size-type")
speedSelect = document.getElementById("speed-type")

sizeTypeList.forEach((element, index) => {
    createOptionField(element, index, sizeSelect)
})

speedTypeList.forEach((element, index) => {
    createOptionField(element, index, speedSelect)
})

calculateBtn.addEventListener("click",calculate)

function calculate() {
    console.log(sizeInput.value)
}

function createOptionField(text, value, select) {
    field = document.createElement("option")
    field.value = value
    field.innerText = text
    select.appendChild(field)
}
