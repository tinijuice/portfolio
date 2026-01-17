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
    
    projects.forEach(project => {
        
        const template = document.getElementById('projectTemplate').content.cloneNode(true)

        template.querySelector('.title').textContent = project.title
        template.querySelector('.description').textContent = project.description
        template.querySelector('.type').textContent = project.type

        fragment.append(template)
    });

    display.append(fragment)
}

setProjects()