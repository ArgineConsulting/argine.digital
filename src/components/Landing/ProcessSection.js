import React, { useRef } from "react";
import Lottie from "lottie-react";
import figureAnimation from "../../animation/figureAnimation.json";
import bgImg from "../../images/process-bg.jpg";

const style = {
  height: 1080,
};

let interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.75],
      type: "seek",
      frames: [0, 150],
    },
  ],
};

export default function ProcessSection() {
  const figureAnimationController = useRef({});
  const segments = {
    first: [160, 225],
    second: [224, 295],
    third: [299, 365],
    fourth: [370, 441],
  };

  const runSegment = (name) => {
    figureAnimationController.current.playSegments(segments[name], true);
  };

  return (
    <section className="our-process">
      <img src={bgImg} className="our-process__bg" />
      <div className="container">
        <h2 className="our-process__title">Our process</h2>
        <div className="our-process__figure">
          <Lottie
            lottieRef={figureAnimationController}
            animationData={figureAnimation}
            style={style}
            interactivity={interactivity}
            onSegmentStart={(e) => console.log(e)}
            onComplete={(e) => console.log("compleete", e)}
          />
        </div>
        <div
          className="our-process__block is-topper"
          onMouseOver={() => runSegment("first")}
        >
          <div className="our-process__block-title">Research (Capture)</div>
          <div className="our-process__block-list">
            <ul>
              <li>Business deconstruction</li>
              <li>Identify problems</li>
              <li>Opportunity Analysis</li>
              <li>Market Sizing</li>
            </ul>
          </div>
        </div>
        <div
          className="our-process__block"
          onMouseOver={() => runSegment("second")}
        >
          <div className="our-process__block-title">Explore (Prioritize)</div>
          <ul className="our-process__block-list">
            <li>Acquisition strategy</li>
            <li>Market Segmentation</li>
            <li>Quality & efficiency of production process</li>
            <li>Sales & Marketing Strategy</li>
          </ul>
        </div>
        <div className="our-process__block-divider"></div>
        <div
          className="our-process__block is-topper"
          onMouseOver={() => runSegment("third")}
        >
          <div className="our-process__block-title">Develop (Design)</div>
          <ul className="our-process__block-list">
            <li>Extend product portfolio</li>
            <li>Initiate change</li>
            <li>Business process reengineering</li>
            <li>Innovation Management</li>
          </ul>
        </div>
        <div
          className="our-process__block"
          onMouseOver={() => runSegment("fourth")}
        >
          <div className="our-process__block-title">Deliver (Select)</div>
          <ul className="our-process__block-list">
            <li>Maximize value with the least risk</li>
            <li>World-class talent</li>
            <li>Expand markets geographically</li>
            <li>
              Infuse creativity - in-house people are too close to the problem.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
