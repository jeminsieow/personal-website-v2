import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ResumeDownloadLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={700}
            exact={true}
            offset={0}
            easeInOutCubic
            onClick={toggle}
          >
            ABOUT
          </SidebarLink>
          <SidebarLink
            to="skills"
            smooth={true}
            duration={700}
            exact={true}
            offset={0}
            easeInOutCubic
            onClick={toggle}
          >
            SKILLS
          </SidebarLink>
          <SidebarLink
            to="experience"
            smooth={true}
            duration={700}
            exact={true}
            offset={0}
            easeInOutCubic
            onClick={toggle}
          >
            EXPERIENCE
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth={true}
            duration={700}
            exact={true}
            offset={0}
            easeInOutCubic
            onClick={toggle}
          >
            PROJECTS
          </SidebarLink>
          <SidebarLink
            to="connect"
            smooth={true}
            duration={700}
            exact={true}
            offset={0}
            easeInOutCubic
            onClick={toggle}
          >
            CONNECT
          </SidebarLink>
          <ResumeDownloadLink href="/resume/Sieow_Je_Min_Resume.pdf" download>
            RESUME
          </ResumeDownloadLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
