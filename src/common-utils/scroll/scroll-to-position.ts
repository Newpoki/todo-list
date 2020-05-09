/**
 * Fonction utilitaire qui scroll jusqu'à la position donnée
 * @param heightToScroll number
 */
export const scrollToPosition = (heightToScroll: number) => {
  const isSmoothScrollSupported = "scrollBehavior" in document.documentElement.style;

  window.scrollTo({
    behavior: isSmoothScrollSupported ? "smooth" : "auto",
    left: 0,
    top: heightToScroll,
  });
};
