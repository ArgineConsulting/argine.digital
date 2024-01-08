import React from 'react'
import { Helmet } from 'react-helmet'
import AboutSection from '../components/Landing/About'
import AboutUsSection from '../components/Landing/AboutUs'
import ContactSection from '../components/Landing/Contact'
import IntroductionSection from '../components/Landing/Introduction'
import ProcessSection from '../components/Landing/Process'
import TeamSection from '../components/Landing/Team'
import VacanciesSection from '../components/Landing/Vacancies'
import BaseLayout from '../components/Layout'
import '../styles/main.sass'

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <Helmet>
        {/* Google Tag Manager START */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLJFLLQQ8D"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BLJFLLQQ8D');
          `}
        </script>
        {/* Google Tag Manager END */}
      </Helmet>

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
