import React from "react";
import {
  ExperienceContainer,
  ExperienceContent,
  SectionTitle,
  ExperienceList,
  ExperienceItem,
  ExperienceUpperSection,
  ExperienceLink,
  ExperienceP,
} from "./ExperienceElements";

const ExperienceSection = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <SectionTitle className="fade-experience fade-hidden">EXPERIENCE</SectionTitle>
        <ExperienceList>
          <ExperienceItem className="fade-experience fade-hidden">
            <ExperienceUpperSection>
              <ExperienceLink
                href="https://www.foodpanda.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foodpanda
              </ExperienceLink>
              <ExperienceP>Jan 2022 - Present</ExperienceP>
            </ExperienceUpperSection>
            <ExperienceP className="fade-experience fade-hidden">Full Stack Engineer</ExperienceP>
          </ExperienceItem>

          <ExperienceItem className="fade-experience fade-hidden">
            <ExperienceUpperSection>
              <ExperienceLink
                href="https://www.adhocado.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adhocado (Co-founder)
              </ExperienceLink>
              <ExperienceP>Aug 2020 - Present</ExperienceP>
            </ExperienceUpperSection>
            <ExperienceP>Mobile Developer</ExperienceP>
            <ExperienceP>UI/UX Designer</ExperienceP>
          </ExperienceItem>

          <ExperienceItem className="fade-experience fade-hidden">
            <ExperienceUpperSection>
              <ExperienceLink
                href="https://prepr.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prepr (Co-op)
              </ExperienceLink>
              <ExperienceP>Aug 2019 - Jul 2020</ExperienceP>
            </ExperienceUpperSection>
            <ExperienceP>Full Stack Engineer</ExperienceP>
            <ExperienceP>UI/UX Designer</ExperienceP>
          </ExperienceItem>
        </ExperienceList>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
