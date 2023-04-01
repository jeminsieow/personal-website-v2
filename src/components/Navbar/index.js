import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeDownloadLink,
} from "./NavbarElements";
import { debounce } from "../../utilities/helpers";

const Navbar = ({ toggle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 50
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <Nav style={{ top: visible ? "0" : "-80px" }}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem className="fade-navbar fade-hidden">
              <NavLinks
                to="about"
                smooth={true}
                duration={700}
                exact={true}
                offset={0}
                easeInOutCubic
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem className="fade-navbar fade-hidden">
              <NavLinks
                to="skills"
                smooth={true}
                duration={700}
                exact={true}
                offset={0}
                easeInOutCubic
              >
                SKILLS
              </NavLinks>
            </NavItem>
            <NavItem className="fade-navbar fade-hidden">
              <NavLinks
                to="experience"
                smooth={true}
                duration={700}
                exact={true}
                offset={0}
                easeInOutCubic
              >
                EXPERIENCE
              </NavLinks>
            </NavItem>
            <NavItem className="fade-navbar fade-hidden">
              <NavLinks
                to="projects"
                smooth={true}
                duration={700}
                exact={true}
                offset={0}
                easeInOutCubic
              >
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem className="fade-navbar fade-hidden">
              <NavLinks
                to="connect"
                smooth={true}
                duration={700}
                exact={true}
                offset={0}
                easeInOutCubic
              >
                CONNECT
              </NavLinks>
            </NavItem>
            <NavItem className="fade-navbar fade-hidden">
              <ResumeDownloadLink
                href="/resume/Sieow_Je_Min_Resume.pdf"
                download
              >
                <strong>RESUME</strong>
              </ResumeDownloadLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
