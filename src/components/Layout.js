import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/main.sass";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;