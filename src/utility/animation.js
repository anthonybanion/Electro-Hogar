export const slideIn = (direction = "up", delay = 0.3, duration = 1) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1, transition: { delay, duration } };

  switch (direction) {
    case "up":
      initial.y = 50;
      animate.y = 0;
      break;
    case "down":
      initial.y = -50;
      animate.y = 0;
      break;
    case "left":
      initial.x = -50;
      animate.x = 0;
      break;
    case "right":
      initial.x = 50;
      animate.x = 0;
      break;
    default:
      break;
  }

  return {
    initial,
    animate,
  };
};

