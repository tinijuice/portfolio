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

        template.querySelector('a').href = project.link

        template.querySelector('.project').style = '--index: ' + (Number(index) + 1)

        
        fragment.append(template)
    });

    display.append(fragment)
}

setProjects()