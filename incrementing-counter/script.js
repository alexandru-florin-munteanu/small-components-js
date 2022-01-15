'use strict';

const COUNTERS = document.querySelectorAll('.counter');

COUNTERS.forEach(counter => {
  counter.innerText = 0;

  const updateCounter = () => {
    const TARGET = +counter.getAttribute('data-target');
    const C = +counter.innerText;
    const increment = TARGET / 400;

    if (C < TARGET) {
      counter.innerText = `${Math.ceil(C + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = TARGET;
    }
  };

  updateCounter();
});
