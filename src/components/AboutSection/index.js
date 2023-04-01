import React from "react";
import { AboutContainer, AboutContent, SectionTitle, AboutP } from "./AboutElements";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle className="fade-about fade-hidden">ABOUT</SectionTitle>
        <AboutP className="fade-about fade-hidden">
          Having pursued both Business and Computer Science at the <strong>National University of Singapore</strong>, I enjoy 
          approaching problems with both lenses, balancing the
          aspects of business requirements and technical capability. With a keen
          eye for design, I aim to build beautiful scalable user-centered
          applications. <br /><br />

          I'm currently a full-stack engineer at <strong>foodpanda</strong> as a 
          part of the Incentives Orchestration Squad.<br /><br />

          <strong>Apart from building stuff,</strong> I like playing video games
          and running around in a game of ultimate frisbee.
        </AboutP>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
