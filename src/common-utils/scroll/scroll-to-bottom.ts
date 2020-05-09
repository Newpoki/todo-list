import { scrollToPosition } from "./scroll-to-position";

export const scrollToBottom = () => {
  scrollToPosition(document.body.scrollHeight);
};
