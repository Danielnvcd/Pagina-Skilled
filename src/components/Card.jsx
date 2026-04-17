import { motion } from 'framer-motion';

const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

const Card = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
  const hover = hoverEffect && !isTouchDevice() ? { y: -8 } : {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={hover}
      className={`bg-white rounded-xl shadow-lg border border-neutral-light overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
