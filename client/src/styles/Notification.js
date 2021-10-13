import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Notification = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  width: max-content;

  /* .toast is passed to toastClassName */
  .toast {
    background-color: var(--grey-dark);
  }

  /* .body is passed to bodyClassName */
  .body {
    padding: 1rem;
  }

  /* .progress is passed to progressClassName */
  .progress {
    background-color: var(--primary);
  }
`;
