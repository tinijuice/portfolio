import './assets/css/style.scss';
import { projects } from './projects';

const fragment = document.createDocumentFragment()

fitty('.fitty')

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    smooth: true,
    lerp: 0.05
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);


async function setProjects() {

    const display = document.querySelector('.projects-list')

    if(!display) return
    display.style = '--numcards: ' + projects.length

    // Vérifie le nombre de projets pour l'orthographier
    let text = ' projet'
    if(projects.length > 1) text = ' projets'

    // Set le nombre de projet(s)
    document.querySelector('.nb-projects').textContent = projects.length + text

    projects.forEach((project, index) => {

        const template = document.getElementById('projectTemplate').content.cloneNode(true)

        template.querySelector('.title .text').textContent = project.title
        template.querySelector('.description p').textContent = project.description
        template.querySelector('.type span').textContent = project.type
        template.querySelector('.technology span').textContent = project.technology

        template.querySelector('.thumbnail img').src = project.thumbnail

        template.querySelector('.thumbnail a').href = project.link
        template.querySelector('.title a').href = project.link

        template.querySelector('.project').style = '--index: ' + (Number(index) + 1)


        fragment.append(template)
    });

    display.append(fragment)
}

setProjects()



function glitchedText(element, maxStep = 3, delay = 100, duration = 150) {

    const letters = "abcdefghijklmnopqrstuvwxyz";

    const original = element.dataset.text;
    const originalWidth= element.getBoundingClientRect().width

    element.style.width = originalWidth + 'px'

    if (!original) return;

    const chars = original.split('');

    element.textContent = chars.map(() => letters[Math.floor(Math.random() * letters.length)]).join('')

    chars.forEach((letter, index) => {

        let step = 0;

        setTimeout(() => {

            const interval = setInterval(() => {

                chars[index] = letters[Math.floor(Math.random() * letters.length)];

                element.textContent = chars.join('');

                if (step >= maxStep) {
                    clearInterval(interval)
                    chars[index] = letter
                    element.textContent = chars.join('')
                }

                step++

            }, duration);
        }, index * delay);



    });

}

let maxStep = 2
let delay = 50
let duration = 100

setInterval(() => {

    document.querySelectorAll('.glitched-text').forEach(el => glitchedText(el, maxStep, delay, duration));
}, 6000);


function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            glitchedText(entry.target, maxStep, delay, duration)
            entry.target.classList.add('isView')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
});

document.querySelectorAll(".glitched-text:not(.isView)").forEach(el => {
    observer.observe(el);
});












