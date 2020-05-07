/**
 * Vérifie si une chaine de caractères est vide
 * @param value - string - Chaine à vérifier
 */
export const checkIsEmpty = (value?: string) => {
  if (!value) {
    return true;
  }

  if (value && value.trim() === "") {
    return true;
  }
  return false;
};
