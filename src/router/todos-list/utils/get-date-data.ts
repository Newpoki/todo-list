import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const getDateData = (todosListDate: string) => {
  const date = new Date(todosListDate);
  const frenchDate = format(date, "dd/MMM/yyyy", { locale: fr });

  return {
    day: frenchDate.split("/")[0],
    month: frenchDate.split("/")[1].toUpperCase(),
    year: frenchDate.split("/")[2],
  };
};
