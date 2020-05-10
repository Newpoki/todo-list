/**
 * Créér un ID unique à partir du timestamp et d'un nombre random
 * @param timestamp Timestamp actuel
 */
export const createId = (timestamp: number) => {
  return `${timestamp + Math.random()}`.replace(".", "");
};
