/** Imports NPM */
import { makeStyles } from "@material-ui/core";

/** Imports locaux */
import { theme } from "theme";

export const getInputStyle = makeStyles(() => ({
  root: {
    "& .Mui-disabled": {
      opacity: 0.6,
    },
    "& .MuiInputLabel-outlined": {
      /** Style du label shrink quand champ rempli ou au focus*/
      "&.MuiInputLabel-shrink": {
        color: theme.colors.light000,

        "&.Mui-error": { color: theme.colors.red500 },
      },

      /** Style du label quand champ vide */
      "&:not(.MuiInputLabel-shrink)": {
        color: theme.colors.light000,

        "&.Mui-error": { color: theme.colors.red500 },
      },
    },

    /** Style du fieldset de base */
    "& fieldset": {
      borderColor: theme.colors.light000,
      transition: "border-color 0.25s",
    },

    "& .MuiOutlinedInput-root": {
      /** au focus*/
      "&.Mui-focused fieldset, &:hover fieldset": {
        borderColor: theme.colors.light000,
      },
      /** quand le champ est désactivé */
      "&.Mui-disabled fieldset": {
        borderColor: theme.colors.light000,
      },
    },

    "& .MuiOutlinedInput-root.Mui-error": {
      /** au focus et en erreur*/
      "&.Mui-focused fieldset, &:hover fieldset": {
        borderColor: theme.colors.red500,
      },
    },

    /** Style de l'input / textarea */
    "& .MuiInputBase-input, & .MuiInputBase-inputMultiline": {
      color: theme.colors.light000,
    },

    /** Annule le style de l'input en autocomplete */
    "& .MuiInputBase-input:-webkit-autofill, & .MuiInputBase-input:-webkit-autofill:hover, & .MuiInputBase-input:-webkit-autofill:focus, & .MuiInputBase-input:-webkit-autofill:active": {
      WebkitTransitionDelay: "99999s",
    },

    /** Annule le style du textarea en autocomplete */
    "& .MuiInputBase-inputMultiline:-webkit-autofill, & .MuiInputBase-inputMultiline:-webkit-autofill:hover, & .MuiInputBase-inputMultiline:-webkit-autofill:focus, & .MuiInputBase-inputMultiline:-webkit-autofill:active": {
      WebkitTransitionDelay: "99999s",
    },
  },
}));
