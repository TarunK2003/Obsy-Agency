/*gsap.to("#box", {     //when we move from inital to final position 
    x:900,
    rotate:360,
    backgroundColor:"yellow",
    duration:3,
    delay:1,
})
*/
/*
gsap.from("#box", {     //when we move from final to initial position 
    x:900,
    rotate:360,
    backgroundColor:"green",
    duration:3,
    delay:1,
})
*/
/*
gsap.to("#div1", {
    x: 900,
    rotate: 360,
    backgroundColor: "red",
    duration: 3,
    scale:0.5,
    delay:1,
})
gsap.to("#div2", {
    x: 900,
    rotate: 360,
    backgroundColor: "pink",
    duration: 3,
    scale:0.5,
    delay:2,
})
gsap.to("#div3", {
    x: 900,
    rotate: 360,
    backgroundColor: "orange",
    duration: 3,
    scale:0.5,
    delay:3,
})
*/
//timeline
/*
var tl = gsap.timeline();
tl.to("#div1", {
    x: 900,
    rotate: 360,
    backgroundColor: "red",
    duration: 3,
    scale:0.5,
})
tl.to("#div2", {
    x: 900,
    rotate: 360,
    backgroundColor: "pink",
    duration: 3,
    scale:0.5,
})
tl.to("#div3", {
    x: 900,
    rotate: 360,
    backgroundColor: "orange",
    duration: 3,
    scale:0.5,
})
*/
gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroller:"body",
        markers:true,
        scrub:true,
    }
})
gsap.from("#page2 #circle",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5,
    }

})
gsap.from("#page3 #circle",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }

})






























