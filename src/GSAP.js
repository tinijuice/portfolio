gsap.registerPlugin(ScrollTrigger);

function initGSAP() {
    textQuiSuiJe()
    presentation()
    // myDigitalSchool()
    parcours()
    heroProjects()
}


function textQuiSuiJe() {
    const text1 = document.querySelector('#qui .text1');
    const text2 = document.querySelector('#qui .text2');
    const textMain = document.querySelector('#qui p');
    const container = document.querySelector('#qui .container');
    const texts = document.querySelector('#qui .texts')


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom 80%",
            scrub: 1,
            markers: false
        }
    });

    tl.to(text1, { x: 0, duration: .7 })
        .to(text2, { x: 0, duration: .7 }, "<")
        .to(textMain, { x: 0, duration: .7 }, "<")
        .to(text1, { bottom: "0%", duration: 1 })
        .to(text2, { bottom: "0%", duration: 1 }, "<")
        .to(texts, { scale: .1, duration: 1 });
}

textQuiSuiJe()


function presentation() {
    const presentation = document.querySelector('#presentation')
    const container = presentation.querySelector('.container')
    const texts = presentation.querySelectorAll('p')
    const spans = presentation.querySelectorAll('span')

    gsap.from(container, {
        y: "0%",
        scrollTrigger: {
            trigger: container,
            start: "-20% bottom",
            end: "top center",
            scrub: 1,
            markers: false
        }
    })


    texts.forEach(p => {
        gsap.to(p, {
            rotate: "2deg",
            scrollTrigger: {
                trigger: container,
                start: "top 90%",
                end: "bottom 90%",
                scrub: 1,
                markers: false
            }
        })
    });


    spans.forEach(span => {
        gsap.to(span, {
            scale: 1.02,
            "--after-width": "100%",
            scrollTrigger: {
                trigger: span,
                start: "top 70%",
                end: "center 90%",
                scrub: 1,
                markers: false
            }
        });
    });

}

presentation()


function myDigitalSchool() {
    const mds = document.querySelector('#MyDigitalSchool');
    const textBox = mds.querySelector('.mainText');
    const texts = mds.querySelectorAll('.mainText span');

    gsap.to(texts, {
        "--after-opacity": 0,
        stagger: .1,
        scrollTrigger: {
            trigger: textBox,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
            markers: false
        }
    });

    const textBox2 = mds.querySelector('.secondText');
    const texts2 = textBox2.querySelectorAll('p');
    const circle = textBox2.querySelector('.circle');

    gsap.to(texts2, {
        color: "var(--orange)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: textBox2,
            start: "55% 20%",
            end: "bottom 80%",
            scrub: 1,
            markers: false
        }
    });

    gsap.to(circle, {
        y: "70%",
        scrollTrigger: {
            trigger: textBox2,
            start: "top 20%",
            end: "bottom 10%",
            scrub: 1,
            markers: false
        }
    })

}


function parcours() {

    const parcours = document.querySelector('#parcours')
    const box = parcours.querySelector('.box-container')
    const text = parcours.querySelector('.texts')

    gsap.to(text, {
        y: "0%",
        scrollTrigger: {
            trigger: box,
            start: "10% 90%",
            end: "bottom 50%",
            scrub: 1,
            markers: false
        }
    })
}


function heroProjects() {
    const heroProjects = document.querySelector('#hero-projects')
    const title = heroProjects.querySelector('.title')
    const spans = title.querySelectorAll('span:not(.not, .not2)')
    const span = title.querySelector("span.not")

    gsap.set(spans, { y: "100%" })
    gsap.set(span, { y: "100%" })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top 20%",
            end: "top top",
            toggleActions: "play none none none",
            markers: false,
        }
    })

    const duration1 = .4
    const duration2 = .6

    tl.to(spans, {
        y: 0,
        duration: duration1,
    }, 0)

    tl.from(spans, {
        left: "50%",
        x: "-50%",
        duration: duration2,
    }, duration1)




    tl.to(span, {
        y: 0,
        duration: duration1,
    }, 0)

    tl.from(span, {
        left: "50%",
        x: "-50%",
        duration: duration2,
    }, duration1)
}

initGSAP()
