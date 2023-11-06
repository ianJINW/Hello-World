let musa = document.querySelector('.playPause')
let song = document.querySelector('main audio')
let songList = document.querySelectorAll('.music-list audio')
let progress = document.querySelector('#progress')
let img = document.querySelector('.img1')
let playlist = document.querySelector('a src')

console.log(musa, song, songList, playlist)

function playPause() {
  if (musa.getAttribute('src') === "/Code Class/caret/circle-play-regular.svg") {
    song.play()
    musa.setAttribute('src', "/Code Class/caret/circle-pause-regular.svg")
  } else {
    song.pause()
    musa.setAttribute('src', "/Code Class/caret/circle-play-regular.svg")
  }
}

progress.max = song.duration;
progress.value = song.currentTime;

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime
  }, 500)

}
if (progress.max) {
  musa.setAttribute('src', "/Code Class/caret/circle-play-regular.svg")
  progress.value = 0
}

playlist.onclick = function () {
  song.currentTime = progress.value
  song.play()
  musa.setAttribute("src", "/Code Class/caret/circle-pause-regular.svg");
};

progress.onchange = function () {
  song.currentTime = progress.value
  song.play()
  musa.setAttribute("src", "/Code Class/caret/circle-pause-regular.svg");
};

songList.forEach(audio =>
  audio.onclick = () => {
    songList.forEach(aud => aud.classList.remove('active'))
    audio.classList.add('active')
    if (aud.classList.contains('active')) {
      let src = audio.children[0].getAttribute('src')
      song.src = src
      let title = song.innerHTML
      let text = audio.children[1].innerHTML
      title = text
    }
  })