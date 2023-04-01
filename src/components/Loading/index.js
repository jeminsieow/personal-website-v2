import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { LoadingContainer } from './LoadingElements'

const Loading = () => {
  return (
    <LoadingContainer>
      <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <HashLoader color="black" size={50}/>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
