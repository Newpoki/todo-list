import { IStoreState } from "../store";

export const getUserPersonalInformations = (state: IStoreState) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    displayName: state.user.displayName,
  };
};
