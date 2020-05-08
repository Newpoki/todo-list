import { IGetSpacingInPixels } from "./get-spacing-in-pixels";

/** Interface du theme */
export interface IThemeProps {
  colors: {
    purpleToPink: "linear-gradient(0deg, rgba(234, 197, 255, 1) 0%, rgba(102, 86, 171, 1) 100%)";
    purple900: "rgba(102, 86, 171, 1)";
    light000: "rgba(255, 255, 255)";
    light900: "rgba(0, 0, 0, 0.9)";
    red500: "rgb(255, 48, 33)";
  };
  constants: {};
  fontFamilies: {
    open: "Open Sans";
  };
  spacing: IGetSpacingInPixels;
}
