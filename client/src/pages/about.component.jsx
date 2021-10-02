import React from "react";

import { AboutContainer } from "../styles/Container";
import { Text } from "../styles/Text";

const About = () => {
  return (
    <>
      <AboutContainer>
        <Text>
          A real time messaging app very similar to Discord. <br /> <br />
          You can create servers and chat rooms. Create your account and get
          started!
        </Text>
      </AboutContainer>
    </>
  );
};

export default About;
