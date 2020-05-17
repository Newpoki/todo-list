import { get, remove, set } from "local-storage";

export function manageLocalStorageEntry<T>(key: string) {
  return {
    get: () => get<T | null>(key),
    set: (value: T): boolean => set(key, value),
    remove: () => remove(key),
  };
}
