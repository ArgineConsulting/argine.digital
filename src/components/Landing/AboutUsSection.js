import React from "react";
import rectangle from "../../images/rectangle.svg";
import triangle from "../../images/triangle.svg";
import rectangleMobile from "../../images/rectangle-mobile.svg";

const AboutUsSection = () => (
  <section className="about-us">
    <div className="container">
      <div className="about-us__left">
        <h1>About us</h1>
        <p className="text">
          We work alongside our clients as a unified team with a shared ambition
          to redefine industries. Leveraging our tailored data centric process &
          army of digital innovators, we are able to deliver better, faster &
          more enduring solutions. Bold innovation requires the courage to
          change.
        </p>
        <h5>
          Argine was founded with the mission of blending the best practices of
          Silicon Valley to visionaries & enterprises across the globe.
        </h5>
        <p className="text">
          Headquartered in San Francisco, we have a methodical approach to
          recruiting and skill development for our talent across the world. Our
          team includes engineers, designers, entrepreneurs, data scientists,
          business managers, research scientists and more. We help our clients
          generate enough impact to set new standards of excellence in their
          industry. <br /> <br />
          Argine has a 10 year commitment to dedicate 20% of its efforts to
          organizations tackling today’s urgent challenges in education, third
          world economic development, social challenges, and environmental
          causes.
        </p>
      </div>
      <div className="about-us__right">
        <div className="about-us__rectangle desktop">
          <img src={rectangle} alt="rectangle" />
        </div>
        <div className="about-us__rectangle mobile">
          <img src={rectangleMobile} alt="rectangleMobile" />
        </div>
        <div className="about-us__triangle">
          <img src={triangle} alt="triangle" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
