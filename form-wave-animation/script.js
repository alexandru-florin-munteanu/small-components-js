'use strict';

const LABELS = document.querySelectorAll('.form-control label');

LABELS.forEach(label => {
  label.innerHTML = label.innerText
    .split('') //Splits the word into the letters
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 40}ms">${letter}</span>`
    )
    // Mapping it to create an array of the letters surrounded by a span
    .join(''); // bringing them back together into a string
});
