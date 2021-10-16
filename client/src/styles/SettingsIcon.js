import { ReactComponent as SettingsLogo } from "../images/settings.svg";

import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SettingsIcon = styled(SettingsLogo)`
  height: 2.1rem;
  width: 2.1rem;
  cursor: pointer;

  &:hover {
    animation: ${rotation} infinite 2s linear;
    transform: scale(1.1);
  }
`;
