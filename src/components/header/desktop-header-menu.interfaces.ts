import { IUser } from "store";

export interface IDesktopHeaderMenuProps {
  user: IUser;
  onDisconnect: () => void;
}
