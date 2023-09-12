
let countEle = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let errorEl = document.getElementById("error")

let count = 0

function increment() {
    count += 1
    countEle.innerText = count
}
///////////////////////

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEle.textContent = 0
    count = 0
}

function error() {
    errorEl.textContent = "Something went wrong, please try again....."
}