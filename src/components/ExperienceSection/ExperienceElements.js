import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: 80px;
  padding-bottom: 250px;

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }
`

export const ExperienceContent = styled.div`
  display: flex;
  width: 950px;
  margin-left: 10%;
  margin-right: 10%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 800;
  height: 100px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ExperienceList = styled.ul`
  flex: 1;
  list-style: none;
  margin-top: 3px;
  padding-left: 130px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding-left: 0;
  }
`

export const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`

export const ExperienceUpperSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ExperienceLink = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ExperienceP = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin: 0px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`