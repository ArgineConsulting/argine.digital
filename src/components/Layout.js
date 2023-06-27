import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/main.sass";
import { ParallaxProvider } from "react-scroll-parallax";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ParallaxProvider>
        <div>{children}</div>
      </ParallaxProvider>
      <Footer />
    </div>
  );
};

export default BaseLayout;
