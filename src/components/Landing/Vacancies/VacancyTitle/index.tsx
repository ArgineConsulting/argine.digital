import React, { FC, useState } from 'react'
import { PropsVacancyTitle } from './types'
import htmlParser from 'react-html-parser'

const VacancyTitle: FC<PropsVacancyTitle> = ({ item }) => {
  // local state
  const [isOpened, setIsOpened] = useState(false)

  // Constants
  const {
    title,
    number,
    position,
    location,
    jobBrief,
    responsibilities1,
    responsibilities2,
    requirements1,
    requirements2,
  } = item

  return (
    <div key={title + number} className={`vacancies__item ${isOpened ? 'is-active' : ''}`}>
      <div className="vacancies__title" onClick={() => setIsOpened(!isOpened)}>
        <span>{number}</span>
        {title}
        <div className="vacancies__icon"></div>
      </div>

      <div className="vacancies__descr">
        <div className="vacancies__descr-top">
          <div className="vacancies__descr-left">
            <p className="text">
              {htmlParser(
                "Join the Argine Digital team and unleash your potential in a high-impact, remote-first environment! We're not just developers; we're innovators in AI, VR/AR/MR, and masterminds in product management. Be a part of groundbreaking projects that redefine businesses and propel them to new heights. Your creativity won't just be welcomed—it'll be celebrated!",
              )}
            </p>
            <h2 className="vacancies__descr__title">JOB BRIEF</h2>
            <p className="text">{htmlParser(jobBrief)}</p>
          </div>

          <div className="vacancies__descr-right">
            <p className="vacancies__descr__subtitle-position">
              <span>POSITION:</span> {position}
            </p>
            <p className="vacancies__descr__subtitle-location">
              <span>LOCATION:</span> {location}
            </p>
            <p className="text inquireEmail">
              Please inquire by emailing{' '}
              <a
                href={`mailto:recruiting@argineconsulting.com?subject=${title}`}
                style={{ textDecoration: 'underline', color: 'white' }}
              >
                recruiting@argineconsulting.com
              </a>{' '}
              your resume, cover letter and salary expectation IN ENGLISH.'
            </p>
          </div>
        </div>

        <div className="vacancies__descr-middle">
          <div className="vacancies__descr-left-middle">
            <h2 className="vacancies__descr__title">RESPONSIBILITIES</h2>
            <ul>
              {responsibilities1.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="vacancies__descr-right-middle">
            <h2 className="text hidden">RESPONSIBILITIES</h2>
            <ul>
              {responsibilities2.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="vacancies__descr-bottom">
          <div className="vacancies__descr-left-bottom">
            <h2 className="text">REQUIREMENTS</h2>
            <ul>
              {requirements1.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="vacancies__descr-right-bottom">
            <h2 className="text hidden">REQUIREMENTS</h2>
            <ul>
              {requirements2.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacancyTitle
