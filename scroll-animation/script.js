'use strict';

const BOXES = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  const TRIGGER = (window.innerHeight / 5) * 4; // bottom trigger

  BOXES.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < TRIGGER) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
