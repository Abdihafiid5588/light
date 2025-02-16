let light = document.querySelector("#light")
let on = document.querySelector("#btnOn")
let off = document.querySelector("#btnOff")

on.addEventListener("click", () => {
    light.style.backgroundColor = "yellow"
})

off.addEventListener("click", () => {
    light.style.backgroundColor = "white"
})

