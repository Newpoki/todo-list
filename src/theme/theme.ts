import { getSpacingInPixels } from "./get-spacing-in-pixels";
import { IThemeProps } from "./theme.interfaces";

export const theme: IThemeProps = {
  colors: {
    light000: "rgba(255, 255, 255)",
    purpleToPink: "linear-gradient(0deg, rgba(234, 197, 255, 1) 0%, rgba(102, 86, 171, 1) 100%)",
  },
  constants: {},
  fontFamilies: {
    open: "Open Sans",
  },
  spacing: getSpacingInPixels,
};
