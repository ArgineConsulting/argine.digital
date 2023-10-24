import React, { FC } from 'react'
import { ABOUT_TEXT_MEDIA } from './constants'

const AboutSection: FC = () => {
  return (
    <section className="about" id="services">
      <div className="container">
        <h1>AMPLIFY YOUR BUSINESS</h1>
      </div>

      <div className="about__items">
        {ABOUT_TEXT_MEDIA.map(({ title, text, image, number }) => (
          <div className="about__item" key={title}>
            <div className="about__animation">
              <img src={image} alt={title} />
            </div>
            <div className="about__item-count">{number}</div>
            <div className="about__item-title">{title}</div>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default AboutSection
