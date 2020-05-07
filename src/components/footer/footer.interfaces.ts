import { ReactNode, MouseEvent } from "react";

export interface IFooterProps {
  children: ReactNode;
  onIconClick: (evt: MouseEvent<HTMLDivElement>) => void;
  iconComponent: ReactNode;
  isDisabled?: boolean;
}
