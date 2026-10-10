let menu = document.querySelector(".fixed-menu")
menu.addEventListener("click", function (params) {
    let clicktarget = params.target
    let activebtn = document.querySelector(".active")
    if (clicktarget.classList.contains("nav-link")) {
        clicktarget.classList.add("active")
        activebtn.classList.remove("active")
    }
})