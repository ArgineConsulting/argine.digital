import * as React from "react";
import IntroductionSection from "../components/Landing/IntroductionSection";
import ProcessSection from "../components/Landing/ProcessSection";
import "../styles/main.sass";

const IndexPage = () => {
  return (
    <main>
      <IntroductionSection />
      <ProcessSection />
    </main>
  );
};

export default IndexPage;
