// where we want to move custom cursor - on main

var main=document.querySelector("#main")
var crsr=document.querySelector(".cursor")
main.addEventListener("mousemove",function(dot){
    crsr.style.left=dot.x+"px"
    crsr.style.top=dot.y+"px"
})
