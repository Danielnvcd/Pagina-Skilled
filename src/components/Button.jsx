import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 font-semibold rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent-red text-white hover:bg-red-700",
    outline: "bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-neutral-light",
    solidBlue: "bg-primary-blue text-white hover:bg-blue-900"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
