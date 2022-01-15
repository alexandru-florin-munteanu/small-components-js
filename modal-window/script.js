'use strict';
// MODAL WINDOW - Working with and manipulating classes

// Selecting all the elements we need for the project

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

// Remove hidden class from HTML document
const openModal = () => {
  MODAL.classList.remove('hidden');
  OVERLAY.classList.remove('hidden');
};
// Add the hidden class back to the HTML document
const closeModal = () => {
  MODAL.classList.add('hidden');
  OVERLAY.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  // you can remove multiple classes separated by a comma, you don't need to use the class selector ' . '
}
// Very common thing to do in web development, working with classes is very important

btnCloseModal.addEventListener('click', closeModal);
OVERLAY.addEventListener('click', closeModal);

// HOW TO RESPOND TO KEYBOARD PRESSES (EVENTS)

// document.addEventListener('keyup') - When you lift your finger from a key off the keyboard
// document.addEventListener('keydown') - When you press down on the key
// document.addEventListener('keypress') - When you keep your finger on a key -> it fires continuously

document.addEventListener('keydown', event => {
  console.log(event.key);
  if (event.key === 'Escape' && !MODAL.classList.contains('hidden')) {
    closeModal();
  }
});
