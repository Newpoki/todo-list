import { TypeOptions } from "react-toastify";

export type INotificationType = "info" | "success" | "warning" | "error";

export interface INotificationProps {
  content: string;
  title: string;
  type: TypeOptions;
}
