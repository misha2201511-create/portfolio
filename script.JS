let menu = document.querySelector(".fixed-menu")
menu.addEventListener("click", function (params) {
    let clicktarget = params.target
    let activebtn = document.querySelector(".active")
    if (clicktarget.classList.contains("nav-link")) {
        clicktarget.classList.add("active")
        activebtn.classList.remove("active")
    }
})
let classLink = ".main-link"
window.onscroll = function () {
    let h = document.documentElement.clientHeight
    if (window.scrollY>=h*4) {
       classLink = ".contacts-link"
    }
    else if (window.scrollY>=h*3) {
        classLink = ".works-link"
    }
    else if (window.scrollY>=h*2) {
        classLink = ".skils-link"
    }
    else if (window.scrollY>=h) {
        classLink = ".about-link"
    }
    else{
        classLink = ".main-link"
    }

let activebtn = document.querySelector(".active")
let newactivebtn = document.querySelector(classLink)
if (!newactivebtn.classList.contains("active")) {
    newactivebtn.classList.add("active")
    activebtn.classList.remove("active")
}
}

document.querySelector(".mobile-button").addEventListener("click", function (params) {
    document.querySelector(".mobile-menu").classList.toggle("hide")
})