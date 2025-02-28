 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)

    let carouselPics = gsap.fromTo('.carousel-pics', 1.5, {
        opacity: 0,
    }, {
        opacity: 1,
        stagger: 0.25
    });

    carouselPics.delay(.8)
    carouselPics.play()

    let textInfo = gsap.fromTo('.text-info', 0.5, {        
        opacity: 0,
        y: -25
    }, {
        opacity: 1,
        y:0,
        stagger: 0.6
    });
    
    textInfo.delay(.75)
    textInfo.play()   
    
    let projectTape = gsap.fromTo('.project-tape', 0.5, {        
        opacity: 0,
        x: -30
    }, {
        opacity: 1,
        x:0,
    });

    projectTape.play()

   }) 