import React, { useRef } from 'react'
import Lottie from "lottie-react"
import figureAnimation from "../../animation/figureAnimation.json";
import bgImg from '../../images/proccess-bg.jpg';

const style = {
    height: 1080,
};

let interactivity = {
    mode: "scroll",
    actions: [
        {
            visibility: [0, .65],
            type: "seek",
            frames: [0, 150],
        },
    ],
};

export default function ProcessSection() {
    const figureAnimationController = useRef({})
    const segments = {
        first: [160, 225],
        second: [224, 295],
        third: [299, 365],
        fourth: [370, 441],
    }

    const runSegment = (name) => {
        figureAnimationController.current.playSegments(segments[name], true)
    }

    return (
        <section className="our-proccess">
            <img src={bgImg} className="our-proccess__bg" />
            <div className="container">
                <h2 className="our-proccess__title">
                    Our proccess
                </h2>
                <div className="our-proccess__figure">
                    <Lottie
                        lottieRef={figureAnimationController}
                        animationData={figureAnimation}
                        style={style}
                        interactivity={interactivity}
                        onSegmentStart={(e) => console.log(e)}
                        onComplete={(e) => console.log('compleete', e)}
                    />
                </div>
                <div className="our-proccess__block is-topper" onMouseOver={() => runSegment('first')}>
                    <ul className="our-proccess__block-list">
                        <li>Business deconstruction</li>
                        <li>Identify problems</li>
                        <li>Opportunity Analysis</li>
                        <li>Market Sizing</li>
                    </ul>
                </div>
                <div className="our-proccess__block" onMouseOver={() => runSegment('second')}>
                    <ul className="our-proccess__block-list">
                        <li>Business deconstruction</li>
                        <li>Identify problems</li>
                        <li>Opportunity Analysis</li>
                        <li>Market Sizing</li>
                    </ul>
                </div>
                <div className="our-proccess__block-divider"></div>
                <div className="our-proccess__block is-topper" onMouseOver={() => runSegment('third')}>
                    <ul className="our-proccess__block-list">
                        <li>Business deconstruction</li>
                        <li>Identify problems</li>
                        <li>Opportunity Analysis</li>
                        <li>Market Sizing</li>
                    </ul>
                </div>
                <div className="our-proccess__block" onMouseOver={() => runSegment('fourth')}>
                    <ul className="our-proccess__block-list">
                        <li>Business deconstruction</li>
                        <li>Identify problems</li>
                        <li>Opportunity Analysis</li>
                        <li>Market Sizing</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}