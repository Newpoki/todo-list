export type IAuthState = "NOT_AUTH" | "MUST_AUTH" | "AUTH";

export interface IAuthReducerState {
  state: IAuthState;
  token: string;
}
