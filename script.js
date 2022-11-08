// 'use script'

// const carouselImages = document.querySelector('.carousel_images');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
// const numberOfImages = document.querySelectorAll('.carousel_images img').length;
const slides = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slides.length - 1;


slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 500}px)`;
});

nextBtn.addEventListener('click', function() {

    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

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
