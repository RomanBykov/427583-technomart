"use strict";var pageBody=document.querySelector("body"),modalContacts=pageBody.querySelector(".modal-contacts"),openContactsButton=pageBody.querySelector(".contacts-btn"),buyButton=pageBody.querySelector(".popular-actions-buy"),modalOrder=pageBody.querySelector(".modal-order"),slideButtonActive="services-btn-active",slideActive="slide-active",elementActive="element-active",keyCodes={ESC:27,ENTER:13,SPACE:27},changeSlide=function(e,t){e.addEventListener("click",function(){resetSlider(),e.classList.add(slideButtonActive),t.classList.add(slideActive)})},closeModal=function(e){e.classList.contains(elementActive)&&e.classList.remove(elementActive)},closeExistModal=function(){document.querySelector(".modal-contacts")&&closeModal(modalContacts),document.querySelector(".modal-map")&&closeModal(modalMap)},toggleRadio=function(e,t){e.checked=!1,t.checked=!0};if(document.querySelector(".slider")){var leftButton=document.querySelector(".direction-btn-left"),rightButton=document.querySelector(".direction-btn-right"),leftRadio=document.querySelector(".slider-radio-1"),rightRadio=document.querySelector(".slider-radio-2");leftButton.addEventListener("click",function(){toggleRadio(rightRadio,leftRadio)}),rightButton.addEventListener("click",function(){toggleRadio(leftRadio,rightRadio)})}if(document.querySelector(".modal-map")){var modalMap=document.querySelector(".modal-map"),openMapButton=document.querySelector(".map-btn");openMapButton.addEventListener("click",function(){modalMap.classList.add(elementActive)})}if(document.querySelector(".services-slides")){var servicesSlides=document.querySelector(".services-slides"),slideButtonOne=servicesSlides.querySelector("#slide-1"),slideButtonTwo=servicesSlides.querySelector("#slide-2"),slideButtonThree=servicesSlides.querySelector("#slide-3"),servicesSlideOne=servicesSlides.querySelector(".services-slide-1"),servicesSlideTwo=servicesSlides.querySelector(".services-slide-2"),servicesSlideThree=servicesSlides.querySelector(".services-slide-3"),slideButtons=[slideButtonOne,slideButtonTwo,slideButtonThree],slides=[servicesSlideOne,servicesSlideTwo,servicesSlideThree],resetSlider=function(){slideButtons.forEach(function(e){e.classList.remove(slideButtonActive)}),slides.forEach(function(e){e.classList.remove(slideActive)})};changeSlide(slideButtonOne,servicesSlideOne),changeSlide(slideButtonTwo,servicesSlideTwo),changeSlide(slideButtonThree,servicesSlideThree)}pageBody.querySelector(".modal-contacts")&&(openContactsButton.addEventListener("click",function(){modalContacts.classList.add(elementActive)}),window.addEventListener("keydown",function(e){e.keyCode===keyCodes.ESC&&(e.preventDefault(),closeModal(modalContacts))})),buyButton.addEventListener("click",function(){modalOrder.classList.add(elementActive)}),window.addEventListener("keydown",function(e){e.keyCode===keyCodes.ESC&&(e.preventDefault(),closeModal(modalOrder),document.querySelector(".modal-map")&&closeModal(modalMap))}),pageBody.addEventListener("click",function(e){var t=e.target;t.classList.contains("popular-actions-buy")&&modalOrder.classList.add(elementActive),t.classList.contains("close-btn")&&(closeModal(modalOrder),closeExistModal())});