'use strict';

var keyCodes = {
  ESC: 27,
  ENTER: 13,
  SPACE: 27
};

var openMapButton = document.querySelector('.map-btn');
var modalMap = document.querySelector('.modal-map');
var closeMapButton = modalMap.querySelector('.close-btn');
var servicesSlides = document.querySelector('.services-slides');
var slideButtonOne = servicesSlides.querySelector('#slide-1');
var slideButtonTwo = servicesSlides.querySelector('#slide-2');
var slideButtonThree = servicesSlides.querySelector('#slide-3');
var servicesSlideOne = servicesSlides.querySelector('.services-slide-1');
var servicesSlideTwo = servicesSlides.querySelector('.services-slide-2');
var servicesSlideThree = servicesSlides.querySelector('.services-slide-3');

var slideButtons = [slideButtonOne, slideButtonTwo, slideButtonThree];
var slides = [servicesSlideOne, servicesSlideTwo, servicesSlideThree];

var slideButtonActive = 'services-btn-active';
var slideActive = 'slide-active';
var mapActive = 'element-active';

openMapButton.addEventListener('click', function() {
  modalMap.classList.add(mapActive);
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === keyCodes.ESC) {
    evt.preventDefault();
    if (modalMap.classList.contains(mapActive)) {
      modalMap.classList.remove(mapActive);
    }
  }
});

closeMapButton.addEventListener('click', function() {
  modalMap.classList.remove(mapActive);
});

var resetSlider = function () {
  slideButtons.forEach(function (button) {
    button.classList.remove(slideButtonActive);
  })
  slides.forEach(function (slide) {
    slide.classList.remove(slideActive);
  });
};

var changeSlide = function (slideButton, slideName) {
  slideButton.addEventListener('click', function() {
    resetSlider();
    slideButton.classList.add(slideButtonActive);
    slideName.classList.add(slideActive);
  })
};

changeSlide(slideButtonOne, servicesSlideOne);
changeSlide(slideButtonTwo, servicesSlideTwo);
changeSlide(slideButtonThree, servicesSlideThree);
