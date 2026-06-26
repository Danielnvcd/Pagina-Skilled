import { m } from 'framer-motion';

const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

const Card = ({ children, className = '', hoverEffect = true, delay = 0, animated = true }) => {
  const hover = hoverEffect && !isTouchDevice() ? { y: -8 } : {};
  const baseClass = `bg-white rounded-xl shadow-lg border border-neutral-light overflow-hidden ${className}`;

  if (!animated) {
    return <div className={baseClass}>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={hover}
      className={baseClass}
    >
      {children}
    </m.div>
  );
};

export default Card;
