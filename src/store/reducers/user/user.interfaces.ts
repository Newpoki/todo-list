import { IAnyRequestStatus } from "services";

export interface IUserReducerState {
  getRequestStatus: IAnyRequestStatus;
  data: IUser;
}

export interface IUser {
  id: string;
  displayName: string;
  email: string;
  photoUrl: string;
}
