'use strict';

var pageBody = document.querySelector('body');
var modalContacts = document.querySelector('.modal-contacts');
var openContactsButton = document.querySelector('.contacts-btn');
var closeContactsButton = document.querySelector('.close-contacts-btn');
var slideButtonActive = 'services-btn-active';
var slideActive = 'slide-active';
var elementActive = 'element-active';
var keyCodes = {
  ESC: 27,
  ENTER: 13,
  SPACE: 27
};

var changeSlide = function (slideButton, slideName) {
  slideButton.addEventListener('click', function() {
    resetSlider();
    slideButton.classList.add(slideButtonActive);
    slideName.classList.add(slideActive);
  })
};

if (document.querySelector('.modal-map')) {
  var modalMap = document.querySelector('.modal-map');
  var openMapButton = document.querySelector('.map-btn');
  var closeMapButton = modalMap.querySelector('.close-map-btn');

  closeMapButton.addEventListener('click', function() {
    modalMap.classList.remove(elementActive);
  });

  openMapButton.addEventListener('click', function() {
    modalMap.classList.add(elementActive);
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === keyCodes.ESC) {
      evt.preventDefault();
      if (modalMap.classList.contains(elementActive)) {
        modalMap.classList.remove(elementActive);
      }
    }
  });
}

if (document.querySelector('.services-slides')) {
  var servicesSlides = document.querySelector('.services-slides');
  var slideButtonOne = servicesSlides.querySelector('#slide-1');
  var slideButtonTwo = servicesSlides.querySelector('#slide-2');
  var slideButtonThree = servicesSlides.querySelector('#slide-3');
  var servicesSlideOne = servicesSlides.querySelector('.services-slide-1');
  var servicesSlideTwo = servicesSlides.querySelector('.services-slide-2');
  var servicesSlideThree = servicesSlides.querySelector('.services-slide-3');
  var slideButtons = [slideButtonOne, slideButtonTwo, slideButtonThree];
  var slides = [servicesSlideOne, servicesSlideTwo, servicesSlideThree];

  var resetSlider = function () {
    slideButtons.forEach(function (button) {
      button.classList.remove(slideButtonActive);
    })
    slides.forEach(function (slide) {
      slide.classList.remove(slideActive);
    });
  };

  changeSlide(slideButtonOne, servicesSlideOne);
  changeSlide(slideButtonTwo, servicesSlideTwo);
  changeSlide(slideButtonThree, servicesSlideThree);
}

closeContactsButton.addEventListener('click', function() {
  modalContacts.classList.remove(elementActive);
});

openContactsButton.addEventListener('click', function() {
  modalContacts.classList.add(elementActive);
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === keyCodes.ESC) {
    evt.preventDefault();
    if (modalContacts.classList.contains(elementActive)) {
      modalContacts.classList.remove(elementActive);
    }
  }
});

pageBody.addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.classList.contains('contacts-btn')) {
    modalContacts.classList.add(elementActive);
  }
});
