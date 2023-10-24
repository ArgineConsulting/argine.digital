import React, { FC } from 'react'
import '../styles/main.sass'
import BaseLayout from '../components/Layout'
import IntroductionSection from '../components/Landing/Introduction'
import AboutSection from '../components/Landing/About'
import ProcessSection from '../components/Landing/Process'
import AboutUsSection from '../components/Landing/AboutUs'
import VacanciesSection from '../components/Landing/Vacancies'
import ContactSection from '../components/Landing/Contact'
import TeamSection from '../components/Landing/Team'

const IndexPage: FC = () => {
  return (
    <BaseLayout>
      <IntroductionSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <AboutUsSection />
      <VacanciesSection />
      <ContactSection />
    </BaseLayout>
  )
}

export default IndexPage
