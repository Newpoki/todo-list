import { getSpacingInPixels } from "./get-spacing-in-pixels";
import { IThemeProps } from "./theme.interfaces";

export const theme: IThemeProps = {
  colors: {
    aqua: "rgba(0, 230, 168, 1)",
    light000: "rgba(255, 255, 255)",
    light300: "rgba(218, 219, 225, 1)",
    light700: "rgba(60, 60, 60, 1)",
    light900: "rgba(0, 0, 0, 0.9)",
    pink500: "rgba(234, 197, 255, 1)",
    pink600: "rgba(199, 168, 216, 1)",
    purpleToPink: "linear-gradient(0deg, rgba(234, 197, 255, 1) 0%, rgba(102, 86, 171, 1) 100%)",
    purple900: "rgba(102, 86, 171, 1)",
    red500: "rgb(255, 48, 33)",
    blue500: "#2196f3",
    green500: "#4caf50",
    orange500: "#ff9800",
  },
  constants: {
    linkActiveClassName: "link-is-active",
  },
  fontFamilies: {
    open: "Open Sans",
    roboto: "Roboto",
  },
  spacing: getSpacingInPixels,
};
