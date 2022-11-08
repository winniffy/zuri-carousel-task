'use strict'

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