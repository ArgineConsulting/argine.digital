import { useLottie, useLottieInteractivity } from 'lottie-react'
import processAnimation from '../animation/process/process1.json'
import { isMobile } from 'react-device-detect'

const options = {
  animationData: processAnimation,
  loop: true,
  autoplay: true,
}

const style = {
  width: '100px',
  height: '100px'
}

const processAnimationFunc = () => {
  const lottieObj = useLottie(options, style)
  const processAnim = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        type: 'seek',
        frames: [0, 150],
        visibility: isMobile ? [0, 0.5] : [0.1, 0.75],
      },
    ],
  })

  return processAnim
}

export default processAnimationFunc
