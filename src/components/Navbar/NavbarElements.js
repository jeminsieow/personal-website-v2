import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  background-color: white;
  opacity: 0.8;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  position: fixed;
  z-index: 10;
  transition: top 0.2s;
  margin-left: -8px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
`;

export const ResumeDownloadLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
`
