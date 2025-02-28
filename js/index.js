 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)

    let juworksTween = gsap.fromTo('.juworks', 1, {        
        opacity: 0,
        x: -120
    }, {
        opacity: 1,
        x:0,
        stagger: 0.85
    });
    
    juworksTween.delay(.75)
    juworksTween.play()

    gsap.fromTo(".project-animation", 
        { x: -10, opacity: 0 }, // Estado inicial
        { 
            x: 0, 
            opacity: 1, 
            duration: .25, 
            ease: "expo.out", 
            stagger: .35, // Efeito sequencial
            scrollTrigger: {
                trigger: ".project-animation", 
                start: "top 75%", 
                toggleActions: "play none none none"
            }
        }
    )
   }) 