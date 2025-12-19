import './assets/css/style.scss';

fitty('.fitty')

const lenis = new Lenis({
    smooth: true,
    lerp: .1
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


