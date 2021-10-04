const toP=document.querySelector(".header");
window.addEventListener("scroll", function(){
    const x = window.pageYOffset;
    if(x>100){
        toP.classList.add("active")
    }
    else{toP.classList.remove("active")}
})