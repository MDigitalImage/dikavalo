  const dinoElem = document.querySelector("[data-heli]")
  const JUMP_SPEED = 0.4
  const GRAVITY = 0.0015
  const DINO_FRAME_COUNT = 2
  const FRAME_TIME = 100
  
  let dinoFrame
  let currentFrameTime

export function setupHeli() {
    dinoFrame = 0
    currentFrameTime = 0
  }

export function updateHeli(delta, speedScale) {
    handleRun(delta, speedScale)
  }

function handleRun(delta, speedScale) {
      
    if (currentFrameTime >= FRAME_TIME) {
      dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT
      dinoElem.src = `imgs/heli${dinoFrame}.png`
      currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale
  }