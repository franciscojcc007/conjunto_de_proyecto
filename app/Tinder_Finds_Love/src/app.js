const d = document
const DECISION_THRESHOLD = 75

let isAnimating = false
let pullDeltaX = 0 // distance from the card being dragged

function startDrag(e) {
  if (isAnimating) return

  // get the first article element
  const actualCard = e.target.closest('article')
  if (!actualCard) return

  // get initial position of mouse or finger
  const startX = e.pageX ?? e.touches[0].pageX

  // listen the mouse and touch movements
  d.addEventListener('mousemove', onMove)
  d.addEventListener('mouseup', onEnd)

  d.addEventListener('touchmove', onMove, { passive: true })
  d.addEventListener('touchend', onEnd, { passive: true })

  function onMove(e) {
    // current position of mouse or finger
    const currentX = e.pageX ?? e.touches[0].pageX

    // the distance between the initial and current position
    pullDeltaX = currentX - startX

    // there is no distance traveled in X axis
    if (pullDeltaX === 0) return

    // change the flag to indicate we are animating
    isAnimating = true

    // calculate the rotation of the card using the distance
    const deg = pullDeltaX / 14

    // apply the transformation to the card
    actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`

    // change the cursor to grabbing
    actualCard.style.cursor = 'grabbing'

    // change opacity of the choice info
    const opacity = Math.abs(pullDeltaX) / 100
    const isRight = pullDeltaX > 0

    const choiceEl = isRight
      ? actualCard.querySelector('.choice.like')
      : actualCard.querySelector('.choice.nope')

    choiceEl.style.opacity = opacity
  }

  function onEnd(e) {
    // remove the event listeners
    d.removeEventListener('mousemove', onMove)
    d.removeEventListener('mouseup', onEnd)

    d.removeEventListener('touchmove', onMove)
    d.removeEventListener('touchend', onEnd)

    // saber si el usuario tomo una decisión
    const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD

    if (decisionMade) {
      const goRight = pullDeltaX >= 0

      // add class according to the decision
      actualCard.classList.add(goRight ? 'go-right' : 'go-left')
      actualCard.addEventListener('transitionend', () => {
        actualCard.remove()
      })
    } else {
      actualCard.classList.add('reset')
      actualCard.classList.remove('go-right', 'go-left')

      actualCard.querySelectorAll('.choice').forEach(choice => {
        choice.style.opacity = 0
      })
    }

    // reset the variables
    actualCard.addEventListener('transitionend', () => {
      actualCard.removeAttribute('style')
      actualCard.classList.remove('reset')

      pullDeltaX = 0
      isAnimating = false
    })

    // reset the choice info opacity
    actualCard
      .querySelectorAll(".choice")
      .forEach((el) => (el.style.opacity = 0));
  }
}

d.addEventListener('mousedown', startDrag)
d.addEventListener('touchstart', startDrag, { passive: true })

