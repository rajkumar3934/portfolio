const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))

const pythonBar = document.querySelector('.bar-python')
const mysqlBar = document.querySelector('.bar-mysql')
const javaBar = document.querySelector('.bar-java')
const nodeBar = document.querySelector('.bar-node')
const htmlBar = document.querySelector('.bar-html')
const bootBar = document.querySelector('.bar-boot')
const reactBar = document.querySelector('.bar-react')
const mongodbBar = document.querySelector('.bar-mongodb')

var t1 = new TimelineLite()

t1.fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(javaBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(40% - 6px)`, ease: Power4.easeOut})
    .fromTo(nodeBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(mongodbBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(mysqlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(bootBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(20% - 6px)`, ease: Power4.easeOut})
    


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

// const showRequiredCategory = event => {
//     const getId = event.id
//     const links = document.querySelectorAll('.work-category button')
//     for(i=0; i<links.length; i++){
//         if(links[i].hasAttribute('class')){
//             links[i].classList.remove('active')
//         }
//     }

//     event.classList.add('active')
//     const getCategory = document.querySelector('.category-${getId}')
//     const categories = document.querySelectorAll('div[class ^= "category-"]')
//     for(i=0; i<categories.length; i++){
//         if(categories[i].hasAttribute('class')){
//             categories[i].classList.remove('showCategory')
//             categories[i].classList.add('hideCategory')
//         }
//     }

//     getCategory.classList.remove('hideCategory')
//     getCategory.classList.add('showCategory')

// }

function showRequiredCategory(event) {

    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')

    for(i=0;i<categories.length; i++) {
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}

function showProject(event1) {
   
}