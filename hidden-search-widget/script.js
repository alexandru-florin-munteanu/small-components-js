'use strict';

const SEARCH = document.querySelector('.search');
const BTN = document.querySelector('.btn');
const INPUT = document.querySelector('.input');

BTN.addEventListener('click', () => {
  SEARCH.classList.toggle('active');
  //   The focus method selects the input field and makes it active
  INPUT.focus();
});
