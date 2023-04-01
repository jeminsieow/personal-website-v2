import styled from "styled-components";

export const IntroductionContainer = styled.div`
  background-image: url("https://res.cloudinary.com/jeminsieow/image/upload/f_auto,q_auto/v1612777649/Introduction.jpg");
  margin: -6px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  @media screen and (max-width: 768px) {
    background-position: 70%;
    height: 800px;
  }
`;

export const IntroductionContent = styled.div`
  width: 700px;
  padding-top: 170px;
  padding-left: 10%;
  padding-bottom: 350px;
  background-color: rgba(225, 225, 225, 0.75);

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 280px;
    background-color: rgba(225, 225, 225, 0.65);
  }
`;

export const IntroductionH1 = styled.h1`
  opacity: 1;
  color: #000;
  font-size: 40px;
  font-weight: 400;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
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
  padding-top: 40px;

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
