import { Fragment } from "react/cjs/react.production.min";
import Layout from "./components/Layout/Layout";
import About from "./components/Main/About";
import React, { useRef, useState } from "react";
import Skills from "./components/Main/Skills";
import Portfolios from "./components/Main/Portfolios/Portfolios";
import Contact from "./components/Main/Contact/Contact";
import Footer from "./components/Layout/Footer";
import { linkNavPrep } from "./assets/linkNav";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const portfoliosNavigateRef = useRef();
  const skillsNavigateRef = useRef();
  const aboutNavigateRef = useRef();
  const contactNavigateRef = useRef();
  const portfolioLinkHandler = linkNavPrep(portfoliosNavigateRef, setIsClicked);
  const skillsLinkHandler = linkNavPrep(skillsNavigateRef, setIsClicked);
  const aboutLinkHandler = linkNavPrep(aboutNavigateRef, setIsClicked);
  const contactLinkHandler = linkNavPrep(contactNavigateRef, setIsClicked);

  //Hamburger Button
  const hamburgerclickHandler = () => {
    setIsClicked((previos) => {
      return !previos;
    });
  };

  return (
    <Fragment>
      <Layout
        onHamburgerClick={hamburgerclickHandler}
        onClick={isClicked}
        portfolioRef={portfolioLinkHandler}
        skillsRef={skillsLinkHandler}
        aboutRef={aboutLinkHandler}
        contactRef={contactLinkHandler}
      >
        <About ref={aboutNavigateRef} />
        <Skills ref={skillsNavigateRef} />
        <Portfolios ref={portfoliosNavigateRef} />
        <Contact ref={contactNavigateRef} />
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
