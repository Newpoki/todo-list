import { ReactNode, MouseEvent } from "react";

export interface IFooterProps {
  children: ReactNode;
  onClick: (evt: MouseEvent<HTMLDivElement>) => void;
  isDisabled?: boolean;
}
