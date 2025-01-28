let box = document.querySelector(".box")

box.innerHTML = "Hello Aidai";
let content = document.querySelector(".content")

content.innerHTML = "Hello Arsen";

let ooo = document.getElementById("ooo")
let ppp = document.getElementById("ppp")


function rrr(){
        // ooo.innerHTML = timer
        ooo.style.beckgroundColor = "red"
        ppp.style.beckgroundColor = "green"
    
}
ooo.onclick = rrr
ppp.onclick = rrr