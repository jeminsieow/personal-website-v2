import React from "react";
import {
  ProjectsContainer,
  ProjectsContent,
  SectionTitle,
  ProjectsList,
  ProjectsItem,
  ProjectImage,
  ProjectDetailSection,
  ProjectLink,
  ProjectsP,
  WonP,
  ProjectSkillsTag,
  ProjectSkill,
  HeroImage,
  WallOfShameImage,
  LucidImage,
  SenpaiImage,
  RecipeesImage,
} from "./ProjectsElements";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionTitle className="fade-projects fade-hidden">PROJECTS</SectionTitle>
        <ProjectsList>
          <ProjectsItem>
            <a
              href="https://devpost.com/software/hero-10ozi8"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              <ProjectImage>
                <HeroImage />
              </ProjectImage>
            </a>
            <ProjectDetailSection>
              <ProjectLink
                href="https://devpost.com/software/hero-10ozi8"
                target="_blank"
                rel="noopener noreferrer"
                className="fade-projects fade-hidden"
              >
                Hero
              </ProjectLink>
              <ProjectsP className="fade-projects fade-hidden">
                A platform that empowers community members to assist in
                cardiac arrest emergencies.
                <br />
                <br />
                Utilising machine learning, Hero determines if the first
                responder should retrieve the nearest AED, or head straight to
                the victim, maximising chances of survival.
              </ProjectsP>
              <WonP className="fade-projects fade-hidden">Won UofTHacks VII</WonP>
              <ProjectSkillsTag className="fade-projects fade-hidden">
                <ProjectSkill>
                  Python, Flask, Scikit-learn, Ngrok
                </ProjectSkill>
              </ProjectSkillsTag>
            </ProjectDetailSection>
          </ProjectsItem>

          <ProjectsItem>
            <a
              href="https://uvents.nus.edu.sg/event/19th-steps/module/CS3216/project/5"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              <ProjectImage>
                <WallOfShameImage />
              </ProjectImage>
            </a>
            <ProjectDetailSection>
            <ProjectLink
              href="https://uvents.nus.edu.sg/event/19th-steps/module/CS3216/project/5"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              Wall of Shame
            </ProjectLink>
              <ProjectsP className="fade-projects fade-hidden">
                A platform that aims to eradicate procrastination by
                utilising public humiliation as a primary motivator.
                <br />
                <br />
                Users create challenges and invite friends to complete them together. 
                Anyone who fails the challenge upon reaching the deadline will be 
                proudly displayed on the Wall of Shame for everyone to see (and throw tomatoes at)!
              </ProjectsP>
              <WonP className="fade-projects fade-hidden">Achieved 3rd in the 19th School of Computing Term Project Showcase (STePs)</WonP>
              <ProjectSkillsTag className="fade-projects fade-hidden">
                <ProjectSkill>
                  Ionic, Figma
                </ProjectSkill>
              </ProjectSkillsTag>
            </ProjectDetailSection>
          </ProjectsItem>

          <ProjectsItem>
            <a
              href="https://recipe-store-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              <ProjectImage>
                <RecipeesImage />
              </ProjectImage>
            </a>
            <ProjectDetailSection>
              <ProjectLink
                href="https://recipe-store-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="fade-projects fade-hidden"
              >
                Recipees
              </ProjectLink>
              <ProjectsP className="fade-projects fade-hidden">
                A web app that allows you to store your favourite recipes.
                <br />
                <br />
                Responsive on both web and mobile, Recipees is made with
                accessibility in mind, allowing you to quickly add recipes, be
                it your own or another you found online.
              </ProjectsP>
              <ProjectSkillsTag className="fade-projects fade-hidden">
                <ProjectSkill>
                  React, Redux, Express, MongoDB, Node.js, Material UI
                </ProjectSkill>
              </ProjectSkillsTag>
            </ProjectDetailSection>
          </ProjectsItem>

          <ProjectsItem>
            <a
              href="https://devpost.com/software/x-1oqc6m"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              <ProjectImage>
                <LucidImage />
              </ProjectImage>
            </a>
            <ProjectDetailSection>
              <ProjectLink
                href="https://devpost.com/software/x-1oqc6m"
                target="_blank"
                rel="noopener noreferrer"
                className="fade-projects fade-hidden"
              >
                Lucid
              </ProjectLink>
              <ProjectsP className="fade-projects fade-hidden">
                A tool that prevents users from being vulnerable from
                intoxication by predicting intoxication levels through basic
                logic questions.
                <br />
                <br />
                If the user is above a threshold level, their emergency
                contacts will be automatically notified of their location.
              </ProjectsP>
              <ProjectSkillsTag className="fade-projects fade-hidden">
                <ProjectSkill>Adobe XD</ProjectSkill>
              </ProjectSkillsTag>
            </ProjectDetailSection>
          </ProjectsItem>

          <ProjectsItem>
            <a
              href="https://www.figma.com/file/nyztFxVbZtu7ODwkkv130z/Senpai?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-projects fade-hidden"
            >
              <ProjectImage>
                <SenpaiImage />
              </ProjectImage>
            </a>
            <ProjectDetailSection>
              <ProjectLink
                href="https://www.figma.com/file/nyztFxVbZtu7ODwkkv130z/Senpai?node-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                className="fade-projects fade-hidden"
              >
                Senpai
              </ProjectLink>
              <ProjectsP className="fade-projects fade-hidden">
                A peer to peer tuition platform, connecting university
                students who need help with their modules with those who have
                already completed them in the past.
                <br />
                <br />
                With features such as built-in chat, scheduling, and tutor
                recommendation, Senpai is the best way to improve your grades.
              </ProjectsP>
              <ProjectSkillsTag className="fade-projects fade-hidden">
                <ProjectSkill>Figma</ProjectSkill>
              </ProjectSkillsTag>
            </ProjectDetailSection>
          </ProjectsItem>

          <ProjectsItem>
            <ProjectsP className="fade-projects fade-hidden">More to come!</ProjectsP>
          </ProjectsItem>
        </ProjectsList>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
