import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ServicesSection: FC = () => (
  <section className="services" id="about-us">
    <div className="container">
      <div className="services__left">
        <h2>
          Argine Consulting is a game development consulting company that creates <br /> end-to-end
          solutions
        </h2>
        <p className="text">
          Argine Consulting is a game development consulting company that creates end-to-end
          solutions for developers and publishers around <br /> the world. Our experienced team
          works with world class gaming companies on product, design, development, management and
          monetization solutions. Using our proprietary LoopStats™ database, we can provide the
          most in depth monetization strategies for your products.
        </p>
        <p className="text">
          We are dedicated to helping video game development studios improve their processes, reduce
          production times, and improve product quality. At the same time, we’re uniquely able to
          give you the monetization data you need with our LoopStats™ technology.
        </p>
      </div>
      <div className="services__right">
        <div className="services__rectangle desktop">
          <StaticImage src="../../../images/rectangle.webp" alt="rectangle" />
        </div>
        <div className="services__rectangle mobile">
          <StaticImage src="../../../images/rectangle-mobile.webp" alt="rectangleMobile" />
        </div>
        <div className="services__figure">
          <StaticImage src="../../../images/green-figure.svg" alt="figure" />
        </div>
      </div>
    </div>
  </section>
)

export default ServicesSection
