/** Imports NPM */
import { FieldMetaState } from "react-final-form";

/**
 * Fonction qui determine le statut d'un champ
 * @param meta - FieldMetaState<TFieldValue> - Meta donné par final form concernant le champ
 */
export const getFieldStatus = <TFieldValue>(meta: FieldMetaState<TFieldValue>) => {
  if (meta.active) {
    return "unchecked";
  }

  if (meta.error && meta.touched) {
    return "error";
  }

  return "unchecked";
};
