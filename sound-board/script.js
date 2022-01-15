// 'use strict';

const SOUNDS = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

SOUNDS.forEach(sound => {
  const btn = document.createElement('button');

  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  SOUNDS.forEach(sound => {
    const SONG = document.getElementById(sound);

    SONG.pause();
    SONG.currentTime = 0;
  });
}
