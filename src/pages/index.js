import * as React from "react";
import IntroductionSection from "../components/Landing/IntroductionSection";
import "../styles/main.sass";
import BaseLayout from "../components/Layout";
import AboutSection from "../components/Landing/AboutSection";
import ProcessSection from "../components/Landing/ProcessSection";
import ServicesSection from "../components/Landing/ServicesSection";
import TeamSection from "../components/Landing/TeamSection";
import ContactSection from "../components/Landing/ContactSection";
import VacanciesSection from "../components/Landing/VacanciesSection";
import AboutUsSection from "../components/Landing/AboutUsSection"

const IndexPage = () => {
  return (
    <BaseLayout>
      <IntroductionSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      {/* <ServicesSection /> */}
      <AboutUsSection />
      <VacanciesSection />
      <ContactSection />
    </BaseLayout>
  );
};

export default IndexPage;
