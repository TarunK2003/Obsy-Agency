/*
var firsth1 = document.querySelector("#firsth1").textContent
var spliteed = firsth1.split("");//ye hamre text ko split kr deta ha on the diffrent ways like for more visit MDN developer

var clutter = " "

spliteed.forEach(function(elem){//ye elem hr bar ak ak elemmts ko chlege ga firsth1 ke 
    clutter += `<span>${elem}</span>`//iski help se hm apne hr ak element ko alg alg kr ke likh sak the ha
})



document.querySelector("#firsth1").innerHTML = clutter;
*/
//GSAP
/*
gsap.to("#page2 h1 span" , {
    color:"white",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",
        start:"top 50%",
        end:"top 10%",
        scrub:1,
        scroller: "body",
        markers: true,
    }

})
*/

var allH1 = document.querySelectorAll("#page2 h1")
    allH1.forEach(function(elem){
        var clutter = ""
        var h1 = elem.textContent 
        var splited = h1.split("")
            splited.forEach(function(e){
                clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter;

    })
    gsap.to("#page2 h1 span" , {
        color:"white",
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page2 h1",
            start:"top 50%",
            end:"top 10%",
            scrub:2.2,
            scroller: "body",
            markers: true,
        }
    
    })
























