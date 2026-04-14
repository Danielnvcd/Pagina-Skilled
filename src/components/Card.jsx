import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={hoverEffect ? { y: -10 } : {}}
      className={`bg-white rounded-xl shadow-lg border border-neutral-light overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
