import React, { useRef } from "react";
import Lottie from "lottie-react";
import rectangle from "../../images/rectangle.svg";
import rectangleMobile from "../../images/rectangle-mobile.svg";
import { Parallax } from "react-scroll-parallax";
import triangleAnimation from "../../animation/triangleAnimation.json";
import { isMobile } from 'react-device-detect';

let interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, isMobile ? 0.4 : 0.75],
      type: "seek",
      frames: [0, 150],
    },
  ],
};

const AboutUsSection = () => {
  const triangleAnimationController = useRef({});

  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__left">
          <h1>About us</h1>
          <p className="text">
            Argine is a global consultancy that helps innovators & leaders drive
            meaningful impact on a global level. We work alongside our clients
            as a unified team with a shared ambition to redefine industries.
            Leveraging our tailored data centric process & army of digital
            innovators, we are able to deliver better, faster & more enduring
            solutions. Bold innovation requires the courage to change.
          </p>
          <h5>
            Argine was founded with the mission of blending the best practices
            of Silicon Valley to visionaries & enterprises across the globe.
          </h5>
          <p className="text">
            Headquartered in San Francisco, we have a methodical approach to
            recruiting and skill development for our talent across the world.
            Our team includes engineers, designers, entrepreneurs, data
            scientists, business managers, research scientists and more. We help
            our clients generate enough impact to set new standards of
            excellence in their industry. <br /> <br />
            Argine has a 10 year commitment to dedicate 20% of its efforts to
            organizations tackling today’s urgent challenges in education, third
            world economic development, social challenges, and environmental
            causes.
          </p>
        </div>
        <div className="about-us__right">
          <div className="about-us__rectangle desktop">
            <Parallax y={[-20, 10]} tagOuter="figure">
              <img src={rectangle} alt="rectangle" />
            </Parallax>
          </div>
          <div className="about-us__rectangle mobile">
            <Parallax y={[-20, 10]} tagOuter="figure">
              <img src={rectangleMobile} alt="rectangleMobile" />
            </Parallax>
          </div>
          <div className="about-us__triangle">
            <Lottie
              lottieRef={triangleAnimationController}
              animationData={triangleAnimation}
              interactivity={interactivity}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
