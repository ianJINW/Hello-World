document.addEventListener('DOMContentLoaded', () => {
  const musa = document.querySelector('.fa-play')
  const song = document.querySelector('.musci')
  const songList = document.querySelectorAll('.music-list li')
  const progress = document.querySelector('#progress')
  const img = document.querySelector('.img1')
  const playlist = document.querySelector('.title')
  const shuffle = document.querySelector('.fa-random')
  const list = document.querySelector('.music-list')
  let songPlace = song.getAttribute('src')
  const element = document.querySelectorAll('.fa-bars')
  const mainM = document.querySelector('.mainM')
  let searchInput = document.querySelector('.search')
  const submit = document.querySelector('.submit')
  let searchList = document.querySelectorAll('.audio-name')

  progress.max = song.duration
  progress.value = song.currentTime

  songList.forEach(element => {
    element.addEventListener('click', e => {
      activateItem(e)
    })
  })
  function activateItem (e) {
    if (e.target.nodeName === 'H3') {
      playlist.innerHTML = e.target.innerHTML
      songPlace = e.target.parentElement.children[0].getAttribute('src')
      song.src = songPlace // Set the source of the audio element
      song.play()
      console.log(songPlace)
      musa.removeAttribute('class')
      musa.setAttribute('class', 'fas fa-pause')
      displayChange()
    }
  }

  song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime
    if (progress.max) {
      img.style.animation = ''
    }
  })

  progress.addEventListener('input', () => {
    song.currentTime = progress.value
    img.style.animation = 'rotate 10s infinite linear'
    song.play()
    musa.removeAttribute('class')
    musa.setAttribute('class', 'fas fa-pause')
  })

  function shuffleRepeat () {
    if (shuffle.getAttribute('class') === 'fas fa-random') {
      shuffle.setAttribute('class', 'fas fa-repeat')
    } else {
      shuffle.setAttribute('class', 'fas fa-random')
    }
  }

  function displayChange () {
    if (list.style.display === 'none') {
      list.style.display = 'block'
      mainM.style.display = 'none'
      searchInput.value = '' // Corrected from search.textContent to search.value
    } else {
      list.style.display = 'none'
      mainM.style.display = 'block'
      searchInput.value = '' // Corrected from search.textContent to search.value
    }
  }

  function playPause () {
    if (musa.getAttribute('class') === 'fas fa-pause') {
      song.pause()
      musa.setAttribute('class', 'fas fa-play')
      img.style.animation = ''
    } else {
      song.play()
      musa.setAttribute('class', 'fas fa-pause')
      img.style.animation = 'rotate 10s infinite linear' // Corrected style assignment
    }
  }

  function performSearch () {
    const searchWords = searchInput.value.toLowerCase()
    searchList.forEach(item => {
      const items = item.textContent.toLowerCase()
      if (items.includes(searchWords)) {
        item.parentElement.style.display = 'list-item'
      } else {
        item.parentElement.style.display = 'none'
      }
    })
  }

  element.forEach(e => {
    console.log(e)
    e.addEventListener('click', displayChange)
  })

  musa.addEventListener('click', playPause)
  shuffle.addEventListener('click', shuffleRepeat)
  submit.addEventListener('click', performSearch) // Change the function name here
})
