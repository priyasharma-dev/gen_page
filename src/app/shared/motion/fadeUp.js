export const fadeUpVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
};

export function fadeUpTransition(delay = 0, duration = 0.3) {
  return {
    delay,
    duration,
    ease: "easeOut",
  };
}
