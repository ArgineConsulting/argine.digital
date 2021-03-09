import * as React from "react";
import IntroductionSection from "../components/Landing/IntroductionSection";
import "../styles/main.sass";
import BaseLayout from "../components/Layout";
import AboutSection from "../components/Landing/AboutSection";
import ProcessSection from "../components/Landing/ProcessSection";
import ServicesSection from "../components/Landing/ServicesSection";
import TeamSection from "../components/Landing/TeamSection";

const IndexPage = () => {
  return (
    <BaseLayout>
      <IntroductionSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <ServicesSection />
    </BaseLayout>
  );
};

export default IndexPage;
