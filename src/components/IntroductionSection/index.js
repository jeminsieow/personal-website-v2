import React from "react";
import {
  useState,
  useEffect
} from "react"
import {
  IntroductionContainer,
  IntroductionContent,
  IntroductionH1,
  IntroductionP,
  IntroductionLink,
} from "./IntroductionElements";

const IntroductionSection = () => {
  let [isIntro, setState] = useState(true)
  
  const clicking =()=>{
    setState(!isIntro)
  }

  useEffect(() => {
    if (isIntro) setTimeout(() => setState(false), 4800)
  }, [isIntro])

  return (
    <IntroductionContainer id="intro-container" onClick={clicking} className={isIntro ? "fade-hero" : "fade-hero-after"}>
      <IntroductionContent>
        <IntroductionH1 className="fade-hidden fade-intro">Hello!</IntroductionH1>
        <IntroductionH1 className="fade-intro fade-hidden">
          I'm <strong>Sieow Je Min</strong>, a full-stack engineer with a
          passion for great design and user experience
        </IntroductionH1>
        <IntroductionP className="fade-intro fade-hidden">
          Connect with me at{" "}
          <IntroductionLink href="mailto:jemin.sieow@gmail.com">
            jemin.sieow@gmail.com
          </IntroductionLink>
        </IntroductionP>
      </IntroductionContent>
    </IntroductionContainer>
  );
};

export default IntroductionSection;
