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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col items-center justify-center text-center py-8 px-4"
            >
              <span className="text-3xl font-black text-primary-blue tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1.5 text-[11px] text-slate-500 uppercase tracking-widest font-bold">
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
