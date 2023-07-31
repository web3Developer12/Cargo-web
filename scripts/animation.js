gsap.registerPlugin(ScrollTrigger);

const counter = document.getElementById("counter");
counter.innerText = `${0}%`;

function updateCounter(i) {
    counter.innerText = `${i}%`;
}
  
function simulateLoader() {
    let i = 0;
    const maxPercentage = 100;

    function update() {
        if (i <= maxPercentage) {
        updateCounter(i);
        i++;
        setTimeout(update,0);
        }else{

            gsap.to(".counter",{
                y:12,opacity:0, ease:"power4.inOut",duration:1.4,stagger:0.1,
                onComplete:()=>{
                    window.scrollTo(0,0);
                    gsap.to(".reveal-page > .reveal-loader",{
                        y:930,
                        ease:"power4.inOut",
                        duration:1.4,
                        stagger:0.05,
                        onComplete:()=>{
                            gsap.to(".reveal-page > .reveal-loader",{
                                opacity:0
                            });
                            gsap.to(".reveal-page",{
                                display:"none"
                            });
                        }
                    });
                }
            });
            animateHome(1.4);
        }
    }
    update();
}

simulateLoader();

gsap.set(".car",{y:50});

gsap.set(".hello-txt-1 > .letter",{
    y:856,
    opacity:1,
    ease:"power4.inOut",
    duration:1.4,
    stagger:0.1,
});

gsap.set(".hello-txt-2 > .letter",{
    y:856,
    opacity:1,
    ease:"power4.inOut",
    duration:1.4,
    stagger:0.1,
});

gsap.set(".section-hero-p-1 > .line",{y:720,opacity:0});

gsap.set(".band-1 > p",{x:720});

gsap.set(".band-2 > p",{x:720});


function animateHome(_delay){

    gsap.to(".car", {y:0,delay:_delay * 1.2,ease:"power4.inOut",duration:1.8});

    gsap.to(".hello-txt-1 > .letter",{
        delay:_delay,
        y:0,
        opacity:1,
        ease:"power4.inOut",
        duration:1.4,
        stagger:0.05,
    });

    gsap.to(".hello-txt-2 > .letter",{
        y:0,
        opacity:1,
        delay:_delay,
        ease:"power4.inOut",
        duration:1.7,
        stagger:0.05,

    });

    gsap.to(".section-hero-p-1 > .line",{
        y:0,
        opacity:1,
        delay:_delay,
        ease:"power4.inOut",
        duration:1.4,
        stagger:0.1, 
    });

    gsap.to(".band-1 > p",{
        x:0,
        opacity:1,
        delay:_delay * 1.3,
        ease:"power4.inOut",
        duration:1.4,
    });

    gsap.to(".band-2 > p",{
        x:0,
        opacity:1,
        delay:_delay * 1.3,
        ease:"power4.inOut",
        duration:1.4,
    });
}


gsap.to(".band-1 > p",{
    scrollTrigger: {
        trigger: ".about",
        toggleActions:"restart pause reverse none"
    },
    x:142,
    opacity:1,
    ease:"power4.inOut",
    duration:1.4,
});

gsap.to(".band-2 > p",{
    scrollTrigger: {
        trigger: ".about",
        toggleActions:"restart pause reverse none"
    },
    x:142,
    opacity:1,
    ease:"power4.inOut",
    duration:1.4,
});

