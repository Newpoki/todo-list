import { manageLocalStorageEntry } from "./manage-local-storage-entry";

export const localStorageManager = {
  authToken: manageLocalStorageEntry<string>("authToken"),
};
