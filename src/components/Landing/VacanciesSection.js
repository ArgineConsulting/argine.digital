import React, { useState } from "react";
import { ArrRight } from "../Common/icons";

const VacanciesSection = () => {
  // const [isOpened, setIsOpened] = useState(false);
  return (
    <section className="vacancies">
      <div className="container">
        <h1>Vacancies</h1>
        <div className="vacancies__items">
          <VacancyTitle
            title="Project manager"
            number="01"
            leftText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions. Using our
        proprietary LoopStats™ database, we can provide the most in depth
        monetization strategies for your products. <br /> <br />
        We are dedicated to helping video game development studios improve their
        processes, reduce production times, and improve product quality. At the
        same time, we’re uniquely able to give you the monetization data you
        need with our LoopStats™ technology."
            rightText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions."
          />
          <VacancyTitle
            title="Software Engineer"
            number="02"
            leftText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions. Using our
        proprietary LoopStats™ database, we can provide the most in depth
        monetization strategies for your products. <br /> <br />
        We are dedicated to helping video game development studios improve their
        processes, reduce production times, and improve product quality. At the
        same time, we’re uniquely able to give you the monetization data you
        need with our LoopStats™ technology."
            rightText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions."
          />
          <VacancyTitle
            title="Assistant Database Administrator"
            number="03"
            leftText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions. Using our
        proprietary LoopStats™ database, we can provide the most in depth
        monetization strategies for your products. <br /> <br />
        We are dedicated to helping video game development studios improve their
        processes, reduce production times, and improve product quality. At the
        same time, we’re uniquely able to give you the monetization data you
        need with our LoopStats™ technology."
            rightText="Argine Consulting is a game development consulting company that creates
        end-to-end solutions for developers and publishers around the world. Our
        experienced team works with world class gaming companies on product,
        design, development, management and monetization solutions."
          />
        </div>
        <button>
          Apply for job
          <ArrRight />
        </button>
      </div>
    </section>
  );
};

const VacancyTitle = ({ title, number, leftText, rightText }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={`vacancies__item ${isOpened ? "is-active" : ""}`}>
      <div className="vacancies__title" onClick={() => setIsOpened(!isOpened)}>
        <span>{number}</span>
        {title}
        <div className="vacancies__icon"></div>
      </div>
      <div className="vacancies__descr">
        <div className="vacancies__descr-left">
          <h5>What you’ll do</h5>
          <p className="text">{leftText}</p>
        </div>
        <div className="vacancies__descr-right">
          <h5>What we offer</h5>
          <p className="text">{rightText}</p>
        </div>
      </div>
    </div>
  );
};

export default VacanciesSection;
