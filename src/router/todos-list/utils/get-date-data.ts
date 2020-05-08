import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const getDateData = (todosListDate: number) => {
  const frenchDate = format(todosListDate, "dd/MMM/yyyy", { locale: fr });

  return {
    day: frenchDate.split("/")[0],
    month: frenchDate.split("/")[1].toUpperCase(),
    year: frenchDate.split("/")[2],
  };
};
