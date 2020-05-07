/** Imports NPM */
import { ChangeEvent, FocusEvent } from "react";

/** Imports locaux */
import { IInputProps } from "../input/input.interfaces";

/** Interface du composant <FinalFormField /> */
export type IFinalFormFieldProps = {
  /** Fonction de validation du champ */
  validate?: (value: string) => string | undefined;

  /** Callback supplémentaire éxécutée après le onChange du champ */
  onChanged?: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => void;

  /** Callback supplémentaire éxécutée après le onFocus du champ */
  onFocused?: (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Callback supplémentaire éxécutée après le onBlur du champ */
  onBlured?: (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  withoutBlurValidation?: boolean;
} & Omit<IInputProps, "value" | "onChange">;
