import React from "react";
import { ArrRight } from "../Common/icons";

const VacanciesSection = () => (
  <section className="vacancies">
    <div className="container">
      <h1>Vacancies</h1>
      <div className="vacancies__items">
        <div className="vacancies__item">
          <div className="vacancies__title">
            <span>01</span>
            Project manager
            <div className="vacancies__icon"></div>
          </div>
          <div className="vacancies__descr">
            <div className="vacancies__descr-left">
              <h5>What you’ll do</h5>
              <p className="text">
                Argine Consulting is a game development consulting company that
                creates end-to-end solutions for developers and publishers
                around the world. Our experienced team works with world class
                gaming companies on product, design, development, management and
                monetization solutions. Using our proprietary LoopStats™
                database, we can provide the most in depth monetization
                strategies for your products. <br /> <br />
                We are dedicated to helping video game development studios
                improve their processes, reduce production times, and improve
                product quality. At the same time, we’re uniquely able to give
                you the monetization data you need with our LoopStats™
                technology.
              </p>
            </div>
            <div className="vacancies__descr-right">
              <h5>What we offer</h5>
              <p className="text">
                Argine Consulting is a game development consulting company that
                creates end-to-end solutions for developers and publishers
                around the world. Our experienced team works with world class
                gaming companies on product, design, development, management and
                monetization solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>
        Apply for job
        <ArrRight />
      </button>
    </div>
  </section>
);
export default VacanciesSection;
