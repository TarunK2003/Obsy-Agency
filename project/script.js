/*
gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", //trigger kr the time hame dhiyan rakha ha ki child ko trigger na kr ke us ke parents ko trigger kr na ha 
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})
*/

//horizontal effects
/*
gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:20,
        markers:true,
        pin:true,
        start:"top 0",
        end: "top -100%",
    
    }
})
*/
//locomotive effects
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});