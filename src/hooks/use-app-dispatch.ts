import { IAppDispatch } from "store";
import { useDispatch } from "react-redux";

// Création d'un dispatch propre à mon store afin d'avoir un meilleur typage
// https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export const useAppDispatch = () => {
  return useDispatch<IAppDispatch>();
};
