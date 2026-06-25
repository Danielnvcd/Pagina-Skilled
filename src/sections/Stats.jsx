import { motion } from 'framer-motion';

const stats = [
  { value: '7', label: 'Años de operación' },
  { value: '300+', label: 'Proyectos ejecutados' },
  { value: '6', label: 'Estados del país' },
  { value: '100%', label: 'Llave en mano' },
];

const Stats = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-2 sm:px-4"
            >
              <span className="text-3xl sm:text-4xl font-black text-primary-blue tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="mt-3 block w-7 h-0.5 bg-accent-red rounded-full" />
              <span className="mt-3 text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest font-bold leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
