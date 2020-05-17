import { manageLocalStorageEntry } from "./manage-local-storage-entry";

export const localStorageManager = {
  userToken: manageLocalStorageEntry<string>("userToken"),
};
