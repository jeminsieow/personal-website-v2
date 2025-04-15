import React from "react";
import {
  SkillsContainer,
  SkillsContent,
  SectionTitle,
  SkillsList,
  SkillsItem,
  SkillsH1,
  SkillsP,
  SkillsGreyP
} from "./SkillsElements";

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SectionTitle className="fade-skills fade-hidden">SKILLS</SectionTitle>
        <SkillsList>
          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Languages</SkillsH1>
            <SkillsP>Go</SkillsP>
            <SkillsP>JavaScript</SkillsP>
            <SkillsP>TypeScript</SkillsP>
            <SkillsP>Java</SkillsP>
            <SkillsP>C</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Web</SkillsH1>
            <SkillsP>HTML</SkillsP>
            <SkillsP>CSS</SkillsP>
            <SkillsP>Sass</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Libraries & Frameworks</SkillsH1>
            <SkillsP>React</SkillsP>
            <SkillsP>React Native</SkillsP>
            <SkillsP>Ionic</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Databases</SkillsH1>
            <SkillsP>PostgreSQL</SkillsP>
            <SkillsP>MySQL</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Testing & Automation</SkillsH1>
            <SkillsP>Selenium</SkillsP>
            <SkillsP>BrowserStack</SkillsP>
            <SkillsP>Jenkins</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Design</SkillsH1>
            <SkillsP>Figma</SkillsP>
          </SkillsItem>

          <SkillsItem className="fade-skills fade-hidden">
            <SkillsH1>Certifications</SkillsH1>
            <SkillsP>AWS Solutions Architect (Associate)</SkillsP>
          </SkillsItem>
        </SkillsList>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default SkillsSection;
