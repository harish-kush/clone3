const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function buttoneffect(){
    var vc = document.querySelector(".videocontainer")
    var btn = document.querySelector(".play")
    vc.addEventListener("mouseenter",function(){
        gsap.to(btn,{
            opacity : 0.5,
            scale : 1
        })
    })
    vc.addEventListener("mouseleave",function(){
        gsap.to(btn,{
            opacity : 0,
            scale : 0
        })
    })
    vc.addEventListener("mousemove",function(gets){
        gsap.to(btn,{
           left: gets.x,   // mouse k saath move krne k liye minus kiya h
           top : gets.y
        })
    })
}
buttoneffect()


function animation() {
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay : 0.5,
        duration : 0.5,
        stagger : 0.3
    })
    gsap.from(".page1 .videocontainer",{
                scale : 0.9,
                opacity :0,
            delay : 0.5,
           duration : 1.3
    })
}
animation()

function cursor(){
document.addEventListener("mousemove",function (dets) {
    gsap.from(".cursor",{
        left: dets.x,
        top: dets.y 
    })
})
}
cursor()

function imgcursor(){
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
}
imgcursor()
