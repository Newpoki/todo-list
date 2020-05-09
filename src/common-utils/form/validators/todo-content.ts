/** Imports locaux */
import { checkIsEmpty } from "../rules/check-is-empty";

/**
 * Check si la valeur est vide et retourne un message d'erreur adéquat
 * @param value - string - chaine de caractère à vérifier
 */
export const todoContentValidator = (value: string): string | undefined => {
  return checkIsEmpty(value) ? "La nouvelle tâche ne peut être vide." : undefined;
};
