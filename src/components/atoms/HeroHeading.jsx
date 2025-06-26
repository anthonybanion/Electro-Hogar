import { motion } from 'framer-motion';
import { slideIn } from '../../utility/animation';

const HeroHeading = () => (
  <motion.h1 className="text-6xl md:text-9xl font-bold text-white drop-shadow-lg"
    variants={slideIn("up", 0.3)} initial="initial" animate="animate">
    20% OFF
  </motion.h1>
);

export default HeroHeading;
