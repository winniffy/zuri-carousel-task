'use script'

// select buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

// select all slides
const slides = document.querySelectorAll('.slide');

// set current slide
let curSlide = 0;

// max no. of slides
let maxSlide = slides.length - 1;

// loop slides and translate all by 500px each
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 500}px)`;
});

// next btn functionality
nextBtn.addEventListener('click', function() {

    // check if current slide is last slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    // translate slide by -500px
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
    });
});

// previous btn functionality
prevBtn.addEventListener('click', function() {

    // check if current slide is first slide
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    // translate slide by +500px
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
    });
});


// nextBtn.addEventListener('click', function() {

//     if (imageIndex !== numberOfImages) {
//             imageIndex++;
//             translateX -= 500;
//         } else if (imageIndex === numberOfImages) {
//             imageIndex = (imageIndex + 1) - numberOfImages;
//             carouselImages.style.transform = `translateX(${-(translateX)}px)`;
//         }

//     carouselImages.style.transform = `translateX(${translateX}px)`;
// });

// prevBtn.addEventListener('click', function() {
//     console.log(imageIndex);
//     if (imageIndex !== numberOfImages || imageIndex === imageIndex) {
//             imageIndex--;
//             translateX += 500;
//         }
//     carouselImages.style.transform = `translateX(${translateX}px)`;
// });



















// carouselButtons.forEach(button => {
//     button.addEventListener('click', event => {
//         if (event.target.id === 'prev') {
//             if (imageIndex != 1) {
//                 imageIndex--;
//                 translateX+= 500;
//             }
//         } else {
//             if (imageIndex !== numberOfImages) {
//                 imageIndex++;
//                 translateX -= 500;
//             }
//         }

//         carouselImages.style.transform = `translateX(${translateX}px)`;
//     });
// })

// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');





// let counter = 1;
// const size = carouselImages[0].clientWidth;

// document.getElementById("carousel_slide").style.transform = 'translateX(' + (-size * counter) + 'px)';

// // carouselSlide.style.transform = 

// next.addEventListener('click', ()=>{
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     console.log(counter);
// })


// console.log('hi')
