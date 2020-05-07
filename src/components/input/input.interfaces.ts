/** Imports NPM */
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

/** Type possible pour la propriété type d'un input */
export type IInputType = "text" | "password";

/** Type possible pour la propriété variant d'un input */
type IInputVariant = "outlined";

/** Type possible pour la propriété status d'un input */
type IInputStatus = "error" | "success" | "unchecked";

/** Interface du composant Input */
export interface IInputProps {
  /** Label de l'input */
  label: string;

  /** Callback éxécutée au changement de l'input */
  onChange?: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Variant de style de l'input */
  variant?: IInputVariant;

  /** Valeur affichée dans l'input */
  value: string;

  /** Id unique de l'input */
  id?: string;

  /** Défini le statut de l'input */
  status?: IInputStatus;

  /** Défini si l'input prend la totalité de la largeur disponible */
  fullWidth?: boolean;

  /** Type HTML5 de l'input */
  type?: IInputType;

  /** Determine si l'input affiché est un TextArea */
  multiline?: boolean;

  /** Name de l'input */
  name: string;

  /** Callback éxécutée au blur de l'input */
  onBlur?: (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Callback éxécutée au focus de l'input */
  onFocus?: (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Callback éxécutée au keyUp de l'input */
  onKeyUp?: (evt: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Défini si le champ est désactivé */
  isDisabled?: boolean;

  /** Texte affiché en dessous du champ */
  helperText?: string;
}
