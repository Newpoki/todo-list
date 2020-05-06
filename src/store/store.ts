import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";

import { appReducer, IAppReducerState } from "./reducers";

/** Interface du state du store de l'application */
export interface IStoreState {
  app: IAppReducerState;
}

const rootReducerState = {
  app: appReducer,
};

const rootReducer = combineReducers(rootReducerState);

export const store = createStore(rootReducer, composeWithDevTools());
