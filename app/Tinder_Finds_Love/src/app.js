const d = document
const DECISION_THRESHOLD = 75

let isAnimating = false
let pullDeltaX = 0 

function startDrag(e) {
  if (isAnimating) return

  const actualCard = e.target.closest('.card')
  if (!actualCard) return

  const startX = e.pageX ?? e.touches[0].pageX

  d.addEventListener('mousemove', onMove)
  d.addEventListener('mouseup', onEnd)
  d.addEventListener('touchmove', onMove, { passive: true })
  d.addEventListener('touchend', onEnd, { passive: true })

  function onMove(e) {

    const currentX = e.pageX ?? e.touches[0].pageX

    pullDeltaX = currentX - startX

    if (pullDeltaX === 0) return

    isAnimating = true
    const deg = pullDeltaX / 14
    actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`
    actualCard.style.cursor = 'grabbing'

    const opacity = Math.abs(pullDeltaX) / 100
    const isRight = pullDeltaX > 0

    const choiceEl = isRight
      ? actualCard.querySelector('.card__choice--like')
      : actualCard.querySelector('.card__choice--nope')

    choiceEl.style.opacity = opacity
  }

  function onEnd(e) {

    d.removeEventListener('mousemove', onMove)
    d.removeEventListener('mouseup', onEnd)
    d.removeEventListener('touchmove', onMove)
    d.removeEventListener('touchend', onEnd)

    const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD

    if (decisionMade) {
      const goRight = pullDeltaX >= 0
      actualCard.classList.add(goRight ? 'card--go-right' : 'card--go-left')
      actualCard.addEventListener('transitionend', () => {
        actualCard.remove()
      })
    } else {
      actualCard.classList.add('card--reset')
      actualCard.classList.remove('card--go-right', 'card--go-left')
      actualCard.querySelectorAll('.card__choice').forEach(choice => {
        choice.style.opacity = 0
      })
    }

    actualCard.addEventListener('transitionend', () => {
      actualCard.removeAttribute('style')
      actualCard.classList.remove('card--reset')
      pullDeltaX = 0
      isAnimating = false
    })

    actualCard
      .querySelectorAll(".card__choice")
      .forEach((el) => (el.style.opacity = 0));
  }
}

d.addEventListener('mousedown', startDrag)
d.addEventListener('touchstart', startDrag, { passive: true })