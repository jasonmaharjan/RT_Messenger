import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Notification } from "../styles/Notification";
import "react-toastify/dist/ReactToastify.css";

const NotificationPopup = ({ message }) => {
  toast.error(`${message}`, { autoClose: 3000 });
  return <Notification />;
};

export default NotificationPopup;
