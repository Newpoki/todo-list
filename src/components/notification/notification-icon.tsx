import { TypeOptions } from "react-toastify";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import React from "react";

interface INotificationIconProps {
  type: TypeOptions;
}

export const NotificationIcon = ({ type }: INotificationIconProps) => {
  switch (type) {
    case "error":
      return <ErrorOutlineIcon />;
    case "success":
      return <CheckCircleOutlineOutlinedIcon />;
    case "info":
      return <InfoOutlinedIcon />;
    case "warning":
    case "default":
      return <ReportProblemOutlinedIcon />;
  }
};
