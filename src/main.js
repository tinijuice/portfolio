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
    display.style = '--numcards: ' + projects.length

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

setInterval(() => {

    document.querySelectorAll('.glitched-text').forEach(el => glitchedText(el, 5, 50, 100));
}, 6000);


function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            glitchedText(entry.target, 5, 50, 150)
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







// function decryptWordSequential(element, changes = 3, intervalTime = 100, delayBetween = 150) {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const original = element.textContent;
//     if (!original) return;

//     const chars = original.split(""); // lettres finales

//     // On initialise le mot en crypté
//     element.textContent = chars.map(() => letters[Math.floor(Math.random() * letters.length)]).join("");

//     // On anime chaque lettre une par une
//     chars.forEach((finalChar, index) => {
//         let step = 0;

//         setTimeout(() => {
//             const interval = setInterval(() => {
//                 if (step >= changes) {
//                     clearInterval(interval);
//                     // on met la vraie lettre finale
//                     element.textContent = chars.map((c, i) => i <= index ? c : element.textContent[i]).join("");
//                     return;
//                 }

//                 // lettre en cours devient aléatoire, les autres restent
//                 element.textContent = chars.map((c, i) => {
//                     if (i === index) return letters[Math.floor(Math.random() * letters.length)];
//                     return element.textContent[i]; // les lettres précédentes restent fixées
//                 }).join("");

//                 step++;
//             }, intervalTime);
//         }, index * delayBetween);
//     });
// }



// const title = document.querySelector(".glitched-text");

// setTimeout(() => {
//     decryptWordSequential(title, 5, 50, 50);
// }, 1000);


