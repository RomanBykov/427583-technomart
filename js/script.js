'use strict';

try {
  var openMapButton = document.querySelector('.map-btn');
  var closeMapButton = document.querySelector('.close-map-btn');
  var closeContactsButton = document.querySelector('.close-contacts-btn');
  var servicesSlides = document.querySelector('.services-slides');
  var slideButtonOne = document.querySelector('#slide-1');
  var slideButtonTwo = document.querySelector('#slide-2');
  var slideButtonThree = document.querySelector('#slide-3');
  var servicesSlideOne = document.querySelector('.services-slide-1');
  var servicesSlideTwo = document.querySelector('.services-slide-2');
  var servicesSlideThree = document.querySelector('.services-slide-3');

  var slideButtons = [slideButtonOne, slideButtonTwo, slideButtonThree];
  var slides = [servicesSlideOne, servicesSlideTwo, servicesSlideThree];

  var slideButtonActive = 'services-btn-active';
  var slideActive = 'slide-active';

  openMapButton.addEventListener('click', function() {
    modalMap.classList.add(elementActive);
  });


  closeMapButton.addEventListener('click', function() {
    modalMap.classList.remove(elementActive);
  });

  closeContactsButton.addEventListener('click', function() {
    modalContacts.classList.remove(elementActive);
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === keyCodes.ESC) {
      evt.preventDefault();
      if (modalMap.classList.contains(elementActive)) {
        modalMap.classList.remove(elementActive);
      }
    }
  });


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
} catch (err) {
  console.log(err);
}

var keyCodes = {
  ESC: 27,
  ENTER: 13,
  SPACE: 27
};

// модальные окна

var modalMap = document.querySelector('.modal-map');
var modalContacts = document.querySelector('.modal-contacts');
var openMapButton = document.querySelector('.map-btn');
var openContactsButton = document.querySelector('.contacts-btn');

var elementActive = 'element-active';

// открытие/закрытие карты






// открытие/закрытие формы обратной связи

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


// работа слайдеров

var resetSlider = function () {
  slideButtons.forEach(function (button) {
    button.classList.remove(slideButtonActive);
  })
  slides.forEach(function (slide) {
    slide.classList.remove(slideActive);
  });
};




var modalContacts = document.querySelector('.modal-contacts');
var pageBody = document.querySelector('body');
var closeContactsButton = modalContacts.querySelector('.close-contacts-btn');

var elementActive = 'element-active';

pageBody.addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.classList.contains('contacts-btn')) {
    modalContacts.classList.add(elementActive);
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === keyCodes.ESC) {
    evt.preventDefault();
    if (modalContacts.classList.contains(elementActive)) {
      modalContacts.classList.remove(elementActive);
    }
  }
});

closeContactsButton.addEventListener('click', function() {
  modalContacts.classList.remove(elementActive);
});
