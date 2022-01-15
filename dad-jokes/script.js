'use strict';

const JOKE_ELEMENT = document.getElementById('joke');
const JOKE_BTN = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
  const CONFIG = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com/api', CONFIG)
    .then(res => res.json())
    .then(data => console.log(data));
}
