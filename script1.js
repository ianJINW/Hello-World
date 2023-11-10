let musa = document.querySelector('.playPause')
let songPlace = document.querySelector('.musci').src
let songList = document.querySelectorAll('.music-list audio')
let progress = document.querySelector('#progress')
let img = document.querySelector('.img1')
let playlist = document.querySelector('.title')
let shuffle = document.querySelector('.shuffle')
let list = document.querySelector('.music-list')

console.log(musa, song, songList)

list.addEventListener('click', activateItem)

function activateItem(e) {
  if (e.target.nodeName == 'DIV') {
    playlist.innerHTML = e.target.innerHTML
    song.src = e.target.src
    song.play()
  }
}
console.log(song)

function playlistChoice(e) {
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children.classList.remove('active')
  }
  e.target.classList.add('active')
  let choice = e.target.getAttribute('src')
  song.src = choice
}

function display() {
  songList.style = 'display: flex;'
}

function shuffleRepeat() {
  if (
    shuffle.getAttribute('src') === '/Code Class/caret/shuffle-solid.svg'
  ) {
    shuffle.setAttribute('src', '/Code Class/caret/repeat-solid.svg')
  } else {
    shuffle.setAttribute('src', '/Code Class/caret/shuffle-solid.svg')
  }
}

function playPause() {
  if (
    musa.getAttribute('src') ===
    '/Code Class/caret/circle-play-regular.svg'
  ) {
    song.play()
    musa.setAttribute('src', '/Code Class/caret/circle-pause-regular.svg')
  } else {
    song.pause()
    musa.setAttribute('src', '/Code Class/caret/circle-play-regular.svg')
  }
}
progress.max = song.duration
progress.value = song.currentTime

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime
  }, 500)
}

if (progress.max) {
  musa.setAttribute('src', '/Code Class/caret/circle-play-regular.svg')
  progress.value = 0
}

progress.onchange = function () {
  song.currentTime = progress.value
  song.play()
  musa.setAttribute('src', '/Code Class/caret/circle-pause-regular.svg')
}

songList.forEach(
  audio =>
  (audio.onclick = () => {
    songList.forEach(aud => aud.classList.remove('active'))
    audio.classList.add('active')
    if (audio.classList.contains('active')) {
      let src = audio.children[0].getAttribute('src')
      song.src = src
      let title = song.innerHTML
      let text = audio.children[1].innerHTML
      title = text
    }
  })
)