import React, { useRef } from "react";
import planetAnimation from "../../animation/planet.json";
import Lottie from "lottie-react";

const IntroductionSection = () => {
  const planetAnimationController = useRef({});

  return (
    <section className="introduction">
      <div className="container">
        <h1>Drive Business Impact with Bold Strategic Vision</h1>
      </div>
      {/* <Lottie
        className="introduction__animation"
        lottieRef={planetAnimationController}
        animationData={planetAnimation}
      /> */}
    </section>
  );
};

export default IntroductionSection;
