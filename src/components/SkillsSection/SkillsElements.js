import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: 80px;
  padding-bottom: 250px;

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }
`

export const SkillsContent = styled.div`
  display: flex;
  width: 1300px;
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

export const SkillsList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 3px;
  padding-left: 130px;

  @media screen and (max-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
  }
`

export const SkillsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-right: 45px;

  @media screen and (max-width: 1400px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const SkillsH1 = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 800;
  padding-bottom: 10px;
  line-height: 25px;
  height: 50px;
  width: 110px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: 10px;
    max-width: 200px;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const SkillsP = styled.p`
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
