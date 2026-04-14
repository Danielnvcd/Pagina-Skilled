import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="text-accent-red font-bold uppercase tracking-wider text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-black text-primary-blue">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-accent-red mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;
