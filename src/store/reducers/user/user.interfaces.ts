import { IAnyRequestStatus } from "services";

export interface IUserReducerState {
  getRequestStatus: IAnyRequestStatus;
  data: IUser;
}

export interface IUser {
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  provider: string;
  updatedAt: string;
}

export interface IGetUserWithGoogleTokenPayload {
  token: string;
}
