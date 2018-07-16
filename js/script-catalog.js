'use strict';

var keyCodes = {
  ESC: 27,
  ENTER: 13,
  SPACE: 27
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
