export const panelBackdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const mobileRightPanelVariants = {
  initial: { y: 36, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 36, opacity: 0 },
};

export const desktopRightPanelVariants = {
  initial: { width: 0, opacity: 0, x: 24 },
  animate: { width: 390, opacity: 1, x: 0 },
  exit: { width: 0, opacity: 0, x: 24 },
};
