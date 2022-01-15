'use strict';

const tags_El = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus;

textArea.addEventListener('keyup', e => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const TAGS = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tags_El.innerHTML = '';
  TAGS.forEach(tag => {
    const tag_El = document.createElement('span');
    tag_El.classList.add('tag');
    tag_El.innerHTML = tag;
    tags_El.appendChild(tag_El);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.trunc(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
