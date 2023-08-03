import React, { useRef } from "react";
// import Lottie from "lottie-react";
// import formAnimation from "../../animation/formAnimation.json";
import amplify1 from "../../images/amplify1.png";
import amplify2 from "../../images/amplify2.png";
import amplify3 from "../../images/amplify3.png";

const AboutSection = () => {
  // const formAnimationController = useRef({});

  const items = [
    {
      title: "Revenue Focused Business Decisions",
      text:
        "We maximize value to your bottom line by deeply understanding your business’s needs before we go to work.",
      idx: "01",
      bgImage: amplify1,
    },
    {
      title: "Cutting Edge Software Solutions",
      text:
        "Our highly skilled network of software developers, product managers & business analysts have experience growing some of the worlds largest and most impactful software companies.",
      idx: "02",
      bgImage: amplify2,
    },
    {
      title: "Data Powered Innovation",
      text:
        "Let us pilot your business to the next level using deep business insights, opportunity sizing, product portfolio expansions, human-centered design and continuous innovation.",
      idx: "03",
      bgImage: amplify3,
    },
  ];

  return (
    <section className="about" id="services">
      <div className="container">
        <h1>AMPLIFY YOUR BUSINESS</h1>
      </div>
      <div className="about__items">
        {items.map(({ title, text, idx, bgImage }) => (
          <div className="about__item">
            {/* <Lottie
              className="about__animation"
              lottieRef={formAnimationController}
              animationData={formAnimation}
            /> */}
            <div className="about__animation">
              <img src={bgImage} alt={title} />
            </div>
            <span className="about__item-count">{idx}</span>
            <div className="about__item-title">{title}</div>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
