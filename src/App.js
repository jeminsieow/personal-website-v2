import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import IntroductionSection from "./components/IntroductionSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ConnectSection from "./components/ConnectSection";
import FooterSection from "./components/FooterSection";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {isLoading === true ? (
        <>
          <Loading />
          <IntroductionSection />
        </>
      ) : (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <IntroductionSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ConnectSection />
          <FooterSection />
        </>
      )}
    </>
  );
};

window.onunload = function () {
  window.scrollTo({
    top: 0,
    left: 0,
  });
};

export default App;
