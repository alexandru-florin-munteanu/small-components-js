'use strict';

/*
 *  -> bring in toggle buttons (querySelectorAll)
 *  -> loop through nodelist (forEach)
 *  -> add click event (addEventListener)
 *  -> Toggle the active class on the parent node (.parentNode & .classList.toggle())
 */

const toggleButtons = document.querySelectorAll('.faq-toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});
