import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 font-semibold rounded-sm transition-all duration-200 flex items-center justify-center border border-transparent";
  
  const variants = {
    primary: "bg-accent-red text-white hover:bg-red-700",
    outline: "bg-transparent border-primary-blue text-primary-blue hover:bg-slate-50",
    solidBlue: "bg-primary-blue text-white hover:bg-[#003153]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
