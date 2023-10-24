import { useLottie, useLottieInteractivity } from 'lottie-react'
import triangleAnimation from '../animation/triangle/triangle.json'
import { isMobile } from 'react-device-detect'

const options = {
  animationData: triangleAnimation,
  loop: true,
  autoplay: true,
}

const style = {
  width: '100px',
  height: '100px',
}

const triangleAnimationFunc = () => {
  const lottieObj = useLottie(options, style)
  const triangleAnim = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        type: 'seek',
        frames: [0, 150],
        visibility: [0, isMobile ? 0.4 : 0.75],
      },
    ],
  })

  return triangleAnim
}

export default triangleAnimationFunc
