import React from "react";

import { StyledButton } from "../styles/Button";

const Button = ({ title, handleClick, ...otherProps }) => {
  return <StyledButton onClick={handleClick}> {title} </StyledButton>;
};

export default Button;
