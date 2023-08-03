import * as React from "react";
import IntroductionSection from "../components/Landing/IntroductionSection";
import "../styles/main.sass";
import BaseLayout from "../components/Layout";
import AboutSection from "../components/Landing/AboutSection";
import ProcessSection from "../components/Landing/ProcessSection";
import ContactSection from "../components/Landing/ContactSection";
import VacanciesSection from "../components/Landing/VacanciesSection";
import AboutUsSection from "../components/Landing/AboutUsSection";
import NewTeamSection from "../components/Landing/NewTeamSection";

const IndexPage = () => {
  return (
    <BaseLayout>
      <IntroductionSection />
      <AboutSection />
      <ProcessSection />
      {/* <TeamSection /> */}
      <NewTeamSection />
      {/* <ServicesSection /> */}
      <AboutUsSection />
      <VacanciesSection />
      <ContactSection />
    </BaseLayout>
  );
};

export default IndexPage;
