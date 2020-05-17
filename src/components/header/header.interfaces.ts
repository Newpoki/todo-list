import { IUser } from "store";

export interface IHeaderProps {
  user: IUser;
  onDisconnect: () => void;
}
