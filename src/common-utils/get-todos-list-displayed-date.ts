import { formatToFrDate } from "./format-to-fr-date";

export const getTodosListdisplayedDate = (createdAt: number, updatedAt?: number) => {
  if (updatedAt) {
    const formatedDate = formatToFrDate(updatedAt, { withHours: true });
    return `Mise à jour le ${formatedDate}`;
  } else {
    const formatedDate = formatToFrDate(createdAt, { withHours: true });
    return `Créé le ${formatedDate}`;
  }
};
