import styled from 'styled-components'
import HeroPng from '../../images/Projects/Hero.png'
import WallOfShamePng from '../../images/Projects/WallOfShame.png'
import LucidPng from '../../images/Projects/Lucid.png'
import SenpaiPng from '../../images/Projects/Senpai.png'
import RecipeesPng from '../../images/Projects/Recipees.png'

export const ProjectsContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: 80px;
  padding-bottom: 250px;

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  width: 1300px;
  margin-left: 10%;

  @media screen and (max-width: 768px) {
    width: 600px;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 480px;
  }
`

export const SectionTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 800;
  height: 40px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ProjectsList = styled.ul`
  flex: 1;
  list-style: none;
  padding-left: 130px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const ProjectsItem = styled.li`
  display: flex;
  padding-bottom: 100px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`

export const ProjectImage = styled.div`
  margin-right: 60px;
  height: 360px;
  width: 590px;

  @media screen and (max-width: 1300px) {
    padding-right: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 0px;
    width: 100%;
    height: auto;
  }
`

export const HeroImage = styled.img`
  width: 100%;
`

HeroImage.defaultProps = {
  src: HeroPng,
}

export const WallOfShameImage = styled.img`
  width: 100%;
`

WallOfShameImage.defaultProps = {
  src: WallOfShamePng,
}

export const RecipeesImage = styled.img`
  width: 100%;
`

RecipeesImage.defaultProps = {
  src: RecipeesPng,
}

export const LucidImage = styled.img`
  width: 100%;
`

LucidImage.defaultProps = {
  src: LucidPng,
}

export const SenpaiImage = styled.img`
  width: 100%;
`

SenpaiImage.defaultProps = {
  src: SenpaiPng,
}

export const ProjectDetailSection = styled.div`
  flex: 1;
  flex-direction: column;
`

export const ProjectLink = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export const ProjectsP = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 20px;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const WonP = styled.p`
  color: #000;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 20px;
`

export const ProjectSkillsTag = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: lightgrey;
`

export const ProjectSkill = styled.p`
  font-size: 14px;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
`
