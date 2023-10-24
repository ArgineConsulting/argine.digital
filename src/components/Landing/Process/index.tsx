import React, { FC } from 'react'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import { Parallax } from 'react-scroll-parallax'
import { StaticImage } from 'gatsby-plugin-image'
import processAnimation1 from '../../../animation/process/process1.json'
import { TSegments } from './types'
const ProcessSection: FC = () => {
  // Constants
  const OPTIONS = {
    animationData: processAnimation1,
    loop: false,
  }

  const SEGMENTS: TSegments = {
    first: [160, 225],
    second: [224, 295],
    third: [299, 365],
    fourth: [370, 441],
  }

  // Hooks
  const lottieObj = useLottie(OPTIONS)
  const processAnim1Interact = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0.1, 0.75],
        type: 'seek',
        frames: [0, 150],
      },
    ],
  })

  return (
    <section className="our-process" id="our-process">
      <div className="our-process__bg">
        <Parallax translateY={[-20, 0]}>
          <StaticImage
            src="../../../images/process-bg.webp"
            alt="processBackgroundImg"
            placeholder="blurred"
          />
        </Parallax>
      </div>
      <div className="container">
        <h2 className="our-process__title">Our process</h2>

        <div className="our-process__figure">{processAnim1Interact}</div>

        <div
          className="our-process__block is-topper"
          onMouseOver={() => lottieObj.playSegments(SEGMENTS.first, true)}
        >
          <div className="our-process__block-title">PROBLEM</div>
          <div className="our-process__block-list">
            <ul>
              <li>Business deconstruction</li>
              <li>Identify problems</li>
              <li>Opportunity analysis</li>
              <li>Market sizing</li>
            </ul>
          </div>
        </div>

        <div
          className="our-process__block"
          onMouseOver={() => lottieObj.playSegments(SEGMENTS.second, true)}
        >
          <ul className="our-process__block-list">
            <li>Acquisition strategy</li>
            <li>Market segmentation</li>
            <li>Quality & efficiency of production process</li>
            <li>Sales & marketing strategy</li>
          </ul>
        </div>

        <div className="our-process__block-divider" />

        <div
          className="our-process__block is-topper"
          onMouseOver={() => lottieObj.playSegments(SEGMENTS.third, true)}
        >
          <div className="our-process__block-title isCenter">PROBLEM DEFINITION</div>
          <ul className="our-process__block-list">
            <li>Extend product portfolio</li>
            <li>Initiate change</li>
            <li>Business process reengineering</li>
            <li>Innovation management</li>
          </ul>
        </div>

        <div
          className="our-process__block"
          onMouseOver={() => lottieObj.playSegments(SEGMENTS.fourth, true)}
        >
          <ul className="our-process__block-list">
            <li>Maximize value with the least risk</li>
            <li>World-class talent</li>
            <li>Expand markets geographically</li>
          </ul>
        </div>
        <div className="our-process__block-title isBottom">SOLUTION</div>
      </div>
    </section>
  )
}

export default ProcessSection
