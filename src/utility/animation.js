export const slideIn = (direction = "up", delay = 1) => {
  let initial = { opacity: 0 };
  
  switch (direction) {
    case "up":
      initial.y = -200;
      break;
    case "down":
      initial.y = 200;
      break;
    case "left":
      initial.x = -200;
      break;
    case "right":
      initial.x = 200;
      break;
    default:
      break;
  }

  return {
    initial,
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay
      }
    }
  };
};
