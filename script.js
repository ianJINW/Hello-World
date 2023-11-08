document.addEventListener('DOMContentLoaded', () => {
  const musa = document.querySelector('.fa-play')
  const song = document.querySelector('.musci')
  const songList = document.querySelectorAll('.music-list audio')
  const progress = document.querySelector('#progress')
  const img = document.querySelector('.img1')
  const playlist = document.querySelector('.title')
  const shuffle = document.querySelector('.fa-random')
  const list = document.querySelector('.music-list')
  let songPlace = song.getAttribute('src')
  const element = document.querySelectorAll('.fa-bars')
  const mainM = document.querySelector('.mainM')
  let search = document.querySelector('.search')
  const submit = document.querySelector('.submit')
  let searchList = document.querySelectorAll('.audio-name')

  progress.max = song.duration
  progress.value = song.currentTime

  song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime
  })

  progress.addEventListener('input', () => {
    song.currentTime = progress.value
    song.play()
    musa.removeAttribute('class')
    musa.setAttribute('class', 'fas fa-pause')
  })

  function activateItem (e) {
    if (e.target.nodeName == 'LI') {
      playlist.innerHTML = e.target.innerHTML
      songPlace = e.target.children[0].getAttribute('src')
      song.src = songPlace // Set the source of the audio element
      song.play()
      musa.removeAttribute('class')
      musa.setAttribute('class', 'fas fa-pause')
    }
  }

  function shuffleRepeat () {
    if (shuffle.getAttribute('class') === 'fas fa-random') {
      shuffle.setAttribute('class', 'fas fa-repeat')
    } else {
      shuffle.setAttribute('class', 'fas fa-random')
    }
  }
  function displayChange () {
    mainM.style.cursor = 'pointer'
    if (list.style.display === 'none') {
      list.style.display = 'block'
      mainM.style.display = 'none'
      search.textContent = ' '
    } else {
      list.style.display = 'none'
      mainM.style.display = 'block'
      search.textContent = ' '
    }
  }
  function playPause () {
    if (musa.getAttribute('class') === 'fas fa-pause') {
      song.pause()
      musa.setAttribute('class', 'fas fa-play')
    } else {
      song.play()
      musa.setAttribute('class', 'fas fa-pause')
      img.style = 'rotate 10s infinite linear'
    }
  }

  function Search () {
    const searchWords = search.value.toLowerCase()
    searchList.forEach(item => {
      const items = item.textContent.toLowerCase()
      if (items.includes(searchWords)) {
        item.parentElement.style.display = 'list-item'
      } else {
        item.parentElement.style.display = 'none'
      }
    })
  }

  list.addEventListener('click', activateItem)

  element.forEach(e => {
    e.addEventListener('click', displayChange)
  })
  musa.addEventListener('click', playPause)
  shuffle.addEventListener('click', shuffleRepeat)
  submit.addEventListener('click', Search)
})
