import { useLottie } from 'lottie-react'
import earthAnimation from '../animation/earth/earth.json'

const introAnimationFunc = () => {
  const options = {
    animationData: earthAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return View
}

export default introAnimationFunc
