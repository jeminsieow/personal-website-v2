import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: 150px;
  padding-bottom: 250px;

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }
`

export const AboutContent = styled.div`
  display: flex;
  width: 930px;
  margin-left: 13%;
  margin-right: 10%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const AboutP = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding-left: 130px;
  line-height: 25px;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding-left: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`
