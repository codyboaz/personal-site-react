import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Projects from "./Projects";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Main />
      <Projects />
      <Footer />
    </div>
  );
};

export default Container;
