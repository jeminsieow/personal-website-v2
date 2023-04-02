import styled from "styled-components";

export const IntroductionContainer = styled.div`
  background-image: linear-gradient(to right, rgba(225, 225, 225, 0.4), rgba(0, 0, 0, 0) 70%), url("https://res.cloudinary.com/jeminsieow/image/upload/q_auto/v1680379422/personal_website/jemin_landscape_1.jpg");
  margin-left: -25px;
  margin-top: -10px;
  height: 100vh;
  width: 100vw;
  
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 1000px) {
    background-image: linear-gradient(to top, rgba(225, 225, 225, 0.7), rgba(0, 0, 0, 0) 70%), url("https://res.cloudinary.com/jeminsieow/image/upload/q_auto/v1680379422/personal_website/jemin_landscape_1.jpg");
    background-position: center;
  }  

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(to top, rgba(225, 225, 225, 0.7), rgba(0, 0, 0, 0) 70%), url("https://res.cloudinary.com/jeminsieow/image/upload/q_auto/v1680417411/personal_website/jemin_portrait_1.jpg");
    background-position: center;
  }
`;

export const IntroductionContent = styled.div`
  width: 550px;
  left: 5%;
  bottom: 10%;
  position: absolute;

  @media screen and (max-width: 768px) {
    width: 450px;
    left: 10%;
    bottom: 5%;
  }
`;

export const IntroductionH1 = styled.h1`
  color: #000;
  font-size: 35px;
  font-weight: 400;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const IntroductionP = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const IntroductionLink = styled.a`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
`;
