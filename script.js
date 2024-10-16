const $coin = document.querySelector('#coin')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
}

const $tapper = document.querySelector('.tapper')

$coin.addEventListener('click', (event) => {
  const rect = $coin.getBoundingClientRect()

  $tapper.classList.toggle('tapped')
  setTimeout(() => {
    $tapper.classList.toggle('tapped')
  }, 100)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $coin.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()