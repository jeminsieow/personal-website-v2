import styled from 'styled-components'

export const ConnectContainer = styled.div`
  display: flex;
  position: relative;
`

export const ConnectContent = styled.div`
  width: 600px;
  padding-left: 10%;
`

export const ConnectH1 = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const ConnectP = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ConnectList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;
`;

export const ConnectItem = styled.li`
  height: 80px;
`;

export const ConnectLink = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;
  padding-top: 10px;
  height: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
