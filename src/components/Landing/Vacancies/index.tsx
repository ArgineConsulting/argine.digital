import React, { FC } from 'react'
import { ArrRight } from '../../Common/icons'
import VacancyTitle from './VacancyTitle'
import { VACANCY } from './constants'

const VacanciesSection: FC = () => (
  <section className="vacancies">
    <div className="container">
      <h1>Vacancies</h1>
      <div className="vacancies__items">
        {VACANCY.map((item, index) => (
          <VacancyTitle key={index + item.title} item={item} />
        ))}
      </div>
      <a className="container__button" href="mailto:recruiting@argineconsulting.com">
        Apply for job
        <ArrRight />
      </a>
    </div>
  </section>
)

export default VacanciesSection
