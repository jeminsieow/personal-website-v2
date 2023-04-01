import React from "react";
import {
  ConnectContainer,
  ConnectContent,
  ConnectH1,
  ConnectP,
  ConnectList,
  ConnectItem,
  ConnectLink,
} from "./ConnectElements";

const ConnectSection = () => {
  return (
    <ConnectContainer id="connect">
      <ConnectContent>
        <ConnectH1 className="fade-connect fade-hidden">Get in touch with me!</ConnectH1>
        <ConnectP className="fade-connect fade-hidden">
          Feel free to connect with me if you have any questions or
          opportunities!
        </ConnectP>
        <ConnectList>
          <ConnectItem className="fade-connect fade-hidden">
            <ConnectLink href="mailto:jemin.sieow@gmail.com">
              EMAIL
            </ConnectLink>
          </ConnectItem>
          <ConnectItem className="fade-connect fade-hidden">
            <ConnectLink
              href="https://www.linkedin.com/in/jeminsieow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </ConnectLink>
          </ConnectItem>
          <ConnectItem className="fade-connect fade-hidden">
            <ConnectLink
              href="https://github.com/jeminsieow"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </ConnectLink>
          </ConnectItem>
        </ConnectList>
      </ConnectContent>
    </ConnectContainer>
  );
};

export default ConnectSection;
