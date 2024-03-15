
let htmlshow = document.getElementById("show-content")
function displaycontent(){
    
    if(htmlshow.style.display === "none"){
        htmlshow.style.display = "block"
    }else{
        htmlshow.style.display = "none"
    }
}

let htmlshow1 = document.getElementById("show-content-1")
function displaycontent1(){
    
    if(htmlshow1.style.display === "none"){
        htmlshow1.style.display = "block"
    }else{
        htmlshow1.style.display = "none"
    }
}

let htmlshow2 = document.getElementById("show-content-2")
function displaycontent2(){
    
    if(htmlshow2.style.display === "none"){
        htmlshow2.style.display = "block"
    }else{
        htmlshow2.style.display = "none"
    }
}

let htmlshow3 = document.getElementById("show-content-3")
function displaycontent3(){
    
    if(htmlshow3.style.display === "none"){
        htmlshow3.style.display = "block"
    }else{
        htmlshow3.style.display = "none"
    }
}

let htmlshow4 = document.getElementById("show-content-4")
function displaycontent4(){
    
    if(htmlshow4.style.display === "none"){
        htmlshow4.style.display = "block"
    }else{
        htmlshow4.style.display = "none"
    }
}

let htmlshow5 = document.getElementById("show-content-5")
function displaycontent5(){
    
    if(htmlshow5.style.display === "none"){
        htmlshow5.style.display = "block"
    }else{
        htmlshow5.style.display = "none"
    }
}

//scroll to top
let scrollbtn = document.getElementById("scroll-top")
window.onscroll = function scrolltop(){
    if(window.scrollY>200){
        scrollbtn.style.display ="block"
    }else{
        scrollbtn.style.display ="none"
    }
}

function topFunction(){
    document.documentElement.scrollTop ="0"
}

//popup
let popup = document.getElementById("popup")

function openpopup() {
    popup.classList.add("open-popup")
}

function closepopup(){
    popup.classList.remove("open-popup")
}

//change webpage to darkmode

let image = document.getElementById("img-dark")
let bannernew = document.getElementById("banner-dark")


function changemode(){
    if(document.body.classList.toggle("dark-mode")){
        image.src="images/moon.png"

    }else{
        image.src="images/sun.png"
    }
}


