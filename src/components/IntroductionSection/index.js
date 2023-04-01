import React from "react";
import {
  IntroductionContainer,
  IntroductionContent,
  IntroductionH1,
  IntroductionP,
  IntroductionLink,
} from "./IntroductionElements";

const IntroductionSection = () => {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <IntroductionH1 className="fade-intro fade-hidden">Hello!</IntroductionH1>
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
